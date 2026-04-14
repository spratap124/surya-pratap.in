import { useMemo, useState } from 'react'
import type { Project, SiteConfig } from '../config/site'
import { useInView } from '../hooks/useInView'

type Props = {
  projects: SiteConfig['projects']
}

function isChromeWebStore(href: string) {
  return /chromewebstore\.google\.com/.test(href)
}

function ctaLabel(project: Project): string {
  if (project.linkLabel) return project.linkLabel
  return isChromeWebStore(project.href) ? 'Chrome Web Store →' : 'View repository →'
}

function ariaForProject(project: Project): string {
  if (isChromeWebStore(project.href)) {
    return `${project.title} — open in Chrome Web Store`
  }
  if (/github\.com/i.test(project.href)) {
    return `${project.title} — view on GitHub`
  }
  if (/\/[^/?#]+\.html?$/i.test(project.href)) {
    return `${project.title} — open live demo`
  }
  return `${project.title} — open link`
}

const gradient = (i: number) => {
  const hues = [165, 200, 280, 32, 130]
  const h = hues[i % hues.length]
  return `linear-gradient(135deg, hsl(${h} 45% 18%) 0%, hsl(${(h + 40) % 360} 35% 12%) 100%)`
}

export function ProjectsSection({ projects }: Props) {
  const { ref, visible } = useInView<HTMLElement>()
  const [filter, setFilter] = useState(projects.categories[0] ?? 'All')

  const list = useMemo(() => {
    if (filter === 'All') return projects.items
    return projects.items.filter((p) => p.category === filter)
  }, [filter, projects.items])

  return (
    <section id="work" ref={ref} className={`section work ${visible ? 'section--visible' : ''}`}>
      <div className="section__header section__header--row">
        <h2 className="section__title">{projects.title}</h2>
        <div className="work__filters" role="tablist" aria-label="Filter projects">
          {projects.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`work__filter ${filter === cat ? 'work__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <ul className="work__grid">
        {list.map((project, i) => (
          <li key={project.title}>
            <a
              className="work__card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={ariaForProject(project)}
            >
              <div className="work__thumb">
                {project.image ? (
                  <img
                    className="work__thumb-img"
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: project.imagePosition ?? 'top center',
                    }}
                  />
                ) : (
                  <div
                    className="work__thumb-fallback"
                    style={{ background: gradient(i) }}
                    aria-hidden
                  />
                )}
              </div>
              <div className="work__meta">
                <span className="work__cat">{project.category}</span>
                <h3 className="work__name">{project.title}</h3>
                <span className="work__cta">{ctaLabel(project)}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
