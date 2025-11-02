import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

interface RelatedArticle {
  title: string
  href: string
  description: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="px-6 md:px-[8%] py-20 bg-gradient-to-b from-gray-950 to-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider">📚 Related Resources</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Continue Learning
          </h2>
          <p className="text-gray-400 text-lg">
            Explore more about video marketing and how to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={article.href}
              href={article.href}
              className="group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 hover:scale-105 no-underline"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm group-hover:gap-3 transition-all duration-300">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

