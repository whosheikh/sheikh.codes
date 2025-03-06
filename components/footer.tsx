import Link from "next/link"
import { ViewCounter } from "@/components/view-counter"
import { TrustBadges } from "@/components/trust-badges"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto flex flex-col gap-4 py-10 px-4 md:flex-row md:gap-8 md:py-12">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Likhon Sheikh</h3>
          <p className="text-green-300">Full-stack developer and SEO specialist based in Bangladesh.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-green-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-green-300 transition-colors">
                  SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:likhon@sheikh.codes" className="hover:text-green-300 transition-colors">
                  likhon@sheikh.codes
                </a>
              </li>
              <li>
                <a href="mailto:hire@likhonsheikh.com" className="hover:text-green-300 transition-colors">
                  hire@likhonsheikh.com
                </a>
              </li>
              <li>
                <a href="mailto:works@sheikh.codes" className="hover:text-green-300 transition-colors">
                  works@sheikh.codes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/whosheikh" className="hover:text-green-300 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://t.me/sheikhcodes" className="hover:text-green-300 transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sheikhcodes/" className="hover:text-green-300 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://whosheikh.github.io" className="hover:text-green-300 transition-colors">
                  GitHub Pages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TrustBadges />

      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:h-16 md:flex-row md:py-0">
          <div className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} Likhon Sheikh. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <ViewCounter />
            <Link href="/donate" className="flex items-center hover:text-green-300 transition-colors">
              <Coffee className="mr-2 h-4 w-4" />
              Buy me a coffee
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

