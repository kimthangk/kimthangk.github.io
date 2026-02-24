import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/kimthangk',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/thanakorn-angkasirisan/',
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://x.com/angkasirisan_t',
  },
]

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('thanakornangkasirisan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-blue relative"
    >
      <div className="section-padding max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in collaborating or have questions about my research?
            Feel free to reach out.
          </p>
        </div>

        {/* Email Card */}
        <div
          className={`bg-white rounded-2xl p-8 lg:p-12 shadow-card text-center transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Email Me
          </h3>
          <p className="text-gray-600 mb-6">
            For research collaborations, inquiries, or just to say hello.
          </p>

          {/* Email Address */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:thanakornangkasirisan@gmail.com"
              className="text-lg lg:text-xl font-medium text-primary hover:text-primary-dark transition-colors"
            >
              thanakornangkasirisan@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>

          {copied && (
            <p className="text-sm text-green-600 mt-2 animate-fade-in">
              Email copied to clipboard!
            </p>
          )}
        </div>

        {/* Social Links */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-gray-500 text-sm mb-4">Or connect with me on</p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-card transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
