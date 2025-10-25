import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, websites, character, offer, orientation } = body

    // Validate the form data
    if (!name || !email || !websites || !character || !offer) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Create transporter with MXrouting SMTP
    const smtpConfig = {
      host: process.env.SMTP_HOST || 'heracles.mxrouting.net',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports like 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    }
    
    console.log('SMTP Config:', {
      host: smtpConfig.host,
      port: smtpConfig.port,
      user: smtpConfig.auth.user,
      hasPassword: !!smtpConfig.auth.pass
    })
    
    const transporter = nodemailer.createTransport(smtpConfig)

    // Verify connection
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      throw verifyError
    }

    // Email to website owner
    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: 'sales@captainhacks.com', // Send to Captain Hacks sales team
      replyTo: email,
      subject: `New Video Order - ${name}`,
      html: `
        <h2>New Captain Hacks Video Order</h2>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Customer Email:</strong> ${email}</p>
        <hr>
        <p><strong>Website/Social Links:</strong></p>
        <p>${websites.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Character Description:</strong></p>
        <p>${character.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Offer Description:</strong></p>
        <p>${offer.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>Video Orientation:</strong> ${orientation}</p>
        <hr>
        <p><small>Order submitted at: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
New Captain Hacks Video Order

Customer Name: ${name}
Customer Email: ${email}

Website/Social Links:
${websites}

Character Description:
${character}

Offer Description:
${offer}

Video Orientation: ${orientation}

---
Order submitted at: ${new Date().toLocaleString()}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    console.log('Video order submitted:', {
      name,
      email,
      orientation,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { success: true, message: 'Order submitted successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Order form error:', error)
    
    // Log more detailed error information
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to submit order. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

