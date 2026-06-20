import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

interface Education {
  degree: string
  school: string
  year: string
  location: string
}

const educationData: Education[] = [
  {
    degree: 'MSc in Psychological Research',
    school: 'University of Oxford',
    year: '2024',
    location: 'Oxford, UK',
  },
  {
    degree: 'MSc in Health Psychology',
    school: 'University College London',
    year: '2023',
    location: 'London, UK',
  },
  {
    degree: 'BSc in Psychological Science',
    school: 'Chulalongkorn University',
    year: '2022',
    location: 'Bangkok, Thailand',
  },
  {
    degree: 'BA in Psychology (Extended Major) & Sociology (Minor)',
    school: 'University of Queensland',
    year: '2021',
    location: 'Brisbane, Australia',
  },
]

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio Text */}
          <div
            className={`transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                My name is Thanakorn Angkasirisan, or unofficially as Kim. I am a co-founder and CEO of LeWell, an OS for learning how to live well. My academic background is in experimental psychology. The goal of my career is to maximise long-term global welfare and ensure a safe transition into the post-AGI era.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div
            className={`transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-6 border-l-2 border-gray-100 last:pb-0 last:border-l-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />

                  {/* Card */}
                  <div className="bg-gray-50 rounded-xl p-5 card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-light px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {edu.year}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
