import { useEffect } from 'react'
import { site } from './config/site'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { SiteFooter } from './components/SiteFooter'
import './App.css'

function App() {
  useEffect(() => {
    document.title = site.meta.title
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', site.meta.description)
  }, [])

  return (
    <div className="app">
      <a className="skip-link" href="#intro">
        Skip to content
      </a>
      <Header name={site.identity.name} nav={site.nav} />
      <main>
        <Hero config={site.identity} />
        <div className="page-divider" aria-hidden />
        <ExperienceSection
          experience={site.experience}
          linkedinHref={site.social.find((s) => s.id === 'linkedin')?.href}
        />
        <div className="page-divider" aria-hidden />
        <ProjectsSection projects={site.projects} />
        <div className="page-divider" aria-hidden />
        <AboutSection about={site.about} social={site.social} />
        <div className="page-divider" aria-hidden />
        <ContactSection contact={site.contact} />
      </main>
      <SiteFooter note={site.footer.note} name={site.identity.name} />
    </div>
  )
}

export default App
