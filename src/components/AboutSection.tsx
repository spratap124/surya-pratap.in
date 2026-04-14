import type { SiteConfig } from '../config/site'
import { SocialIcon } from './SocialIcons'
import { useInView } from '../hooks/useInView'

type Props = {
  about: SiteConfig['about']
  social: SiteConfig['social']
}

export function AboutSection({ about, social }: Props) {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="about" ref={ref} className={`section about ${visible ? 'section--visible' : ''}`}>
      <div className="section__header">
        <h2 className="section__title">{about.title}</h2>
      </div>
      <div className="about__body">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="about__p">
            {p}
          </p>
        ))}
        <ul className="about__social">
          {social.map((s) => (
            <li key={s.id}>
              <a className="about__social-link" href={s.href} target="_blank" rel="noreferrer">
                <SocialIcon id={s.id} title={s.label} />
                <span className="sr-only">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
