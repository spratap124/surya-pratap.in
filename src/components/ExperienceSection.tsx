import type { SiteConfig } from '../config/site'
import { useInView } from '../hooks/useInView'

type Props = {
  experience: SiteConfig['experience']
  linkedinHref?: string
}

export function ExperienceSection({ experience, linkedinHref }: Props) {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="experience"
      ref={ref}
      className={`section experience ${visible ? 'section--visible' : ''}`}
      aria-labelledby="experience-heading"
    >
      <div className="experience__header">
        <h2 id="experience-heading" className="section__title">
          {experience.title}
        </h2>
        {experience.subtitle ? (
          <p className="experience__subtitle">
            {experience.subtitle}
            {linkedinHref ? (
              <>
                {' '}
                <a className="experience__linkedin" href={linkedinHref} target="_blank" rel="noreferrer">
                  LinkedIn profile →
                </a>
              </>
            ) : null}
          </p>
        ) : null}
      </div>

      <ol className="experience__timeline">
        {experience.items.map((job) => (
          <li key={`${job.company}-${job.role}-${job.period}`} className="experience__item">
            <div className="experience__marker" aria-hidden />
            <div className="experience__card">
              <div className="experience__meta">
                <span className="experience__period">{job.period}</span>
                {job.location ? (
                  <span className="experience__location">{job.location}</span>
                ) : null}
              </div>
              <h3 className="experience__role">{job.role}</h3>
              <p className="experience__company">{job.company}</p>
              {job.highlights && job.highlights.length > 0 ? (
                <ul className="experience__highlights">
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
