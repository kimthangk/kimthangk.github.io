import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Thanakorn Angkasirisan. All rights reserved.
          </p>

          {/* Made with */}
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Vibe coded with <Heart className="w-4 h-4 text-red-400 fill-red-400" />{' '}
            using Kimi 2.5 Agent
          </p>
        </div>
      </div>
    </footer>
  )
}
