import { useEffect, useRef, useState } from 'react'

export default function Projects() {
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

  const projects = [
    {
      title: 'LeWellUp App',
      description: 'Like Duolingo, but for becoming a better self. Level up your mind, body, relationships, lifespan, and more — with gamified, evidence-based lessons and daily challenges.',
      status: 'Prototyping',
      tags: ['wellness app', 'longevity', 'positive psychology'],
      link: 'https://claude.ai/public/artifacts/69dc13bd-f28a-4b09-9120-6a63a0a3ec55', // optional
    },
    {
      title: 'Solving Multi-Hop Problem in Knowledge Editing',
      description: 'We apply circuit discovery methods to edit knowledge in LLMs at the circuit-level, expecting to yield improved performance on multi-hop reasoning',
      status: 'Ongoing',
      tags: ['knowledge editing', 'mechanistic interpretability', 'multi-hop reasoning'],
      link: 'https://your-link.com', // optional
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-blue relative"
    >
      <div className="section-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Research
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Status badge */}
              <span className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.status}
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Optional link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary font-medium hover:underline mt-auto"
                >
                  {'Learn more →'}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
