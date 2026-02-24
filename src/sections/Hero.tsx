import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Github, Linkedin, Twitter } from 'lucide-react'

import profilePic from '../../profile.jpg'

const contactLinks = [
  {
    name: 'Google Scholar',
    icon: <GraduationCap className="w-5 h-5" />,
    url: 'https://scholar.google.com/citations?user=ZgRwryYAAAAJ&hl=en',
  },
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
    name: 'X',
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://x.com/angkasirisan_t',
  },
]

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      </div>

      <div className="section-padding w-full max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div
            className={`relative transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-soft" />
              <div
                className="absolute inset-2 rounded-full border border-primary/10"
                style={{ animationDelay: '500ms' }}
              />

              {/* Image container */}
              <div className="absolute inset-1 rounded-full overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500">
                <img
                  src={profilePic}
                  alt="Thanakorn Angkasirisan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Name */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            >
              Thanakorn Angkasirisan
            </h1>

            {/* Tagline */}
            <p
              className={`text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              Interdisciplinary Researcher. <br /> thanakornangkasirisan@gmail.com
            </p>

            {/* Contact Icons - Icon only */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-4 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '600ms' }}
            >
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary-light to-white border border-primary/20 rounded-full text-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-card"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-300">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
