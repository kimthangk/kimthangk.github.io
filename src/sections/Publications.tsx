import { useEffect, useRef, useState } from 'react'
import { FileText, ExternalLink, Quote } from 'lucide-react'

interface Publication {
  authors: string
  year: string
  title: string
  journal: string
  doi: string
}

const publications: Publication[] = [
  {
    authors:
      'Dhirachaikulpanich, D., Dendumrongsup, W., Viyoch, T., Srithawatpong, N., Angkasirisan, T., Huang, X., Wainipitapong, S.',
    year: '2025',
    title:
      'Spirituality and Psychological Well-Being of Adults with a History of Child Abuse by Catholic Clergy: A Systematic Review of Qualitative and Quantitative Studies',
    journal: 'Journal of Religion and Health',
    doi: 'https://doi.org/10.1007/s10943-025-02379-3',
  },
  {
    authors: 'Angkasirisan, T.',
    year: '2025',
    title:
      'Naturalistic multimodal emotion data with deep learning can advance the theoretical understanding of emotion',
    journal: 'Psychological Research',
    doi: 'https://doi.org/10.1007/s00426-024-02068-y',
  },
]

export default function Publications() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-padding max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Research
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Publications
          </h2>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`group relative bg-gray-50 rounded-2xl p-6 lg:p-8 card-hover transition-all duration-1000 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Year badge */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full mb-4">
                <FileText className="w-3 h-3" />
                {pub.year}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 pr-12 group-hover:text-primary transition-colors">
                {pub.title}
              </h3>

              {/* Authors */}
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Authors:</span>{' '}
                {pub.authors.split(',').map((author, i, arr) => (
                  <span key={i}>
                    {author.trim() === 'Angkasirisan, T.' ? (
                      <span className="text-primary font-medium">
                        {author.trim()}
                      </span>
                    ) : (
                      author.trim()
                    )}
                    {i < arr.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>

              {/* Journal */}
              <p className="text-sm text-gray-500 italic mb-4">
                {pub.journal}
              </p>

              {/* DOI Link */}
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors link-underline"
              >
                View on Publisher Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Citation Note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-gray-500 text-sm">
            For a complete list of publications and citations, please visit my{' '}
            <a
              href="https://scholar.google.com/citations?user=ZgRwryYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark link-underline"
            >
              Google Scholar
            </a>{' '}
            profile.
          </p>
        </div>
      </div>
    </section>
  )
}
