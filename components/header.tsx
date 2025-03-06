import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/70">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4 px-4">
          <Link href="/" className="text-2xl font-bold hover:text-green-300 transition-colors">
            sheikh.codes:~$
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/about" className="hover:text-green-300 transition-colors">
              about
            </Link>
            <Link href="/projects" className="hover:text-green-300 transition-colors">
              projects
            </Link>
            <Link href="/blog" className="hover:text-green-300 transition-colors">
              blog
            </Link>
            <Link href="/seo" className="hover:text-green-300 transition-colors">
              seo
            </Link>
            <Link href="/donate" className="hover:text-green-300 transition-colors">
              donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

