import { useState } from 'react'
import type { FormEvent } from 'react'
import type { SiteConfig } from '../config/site'
import { useInView } from '../hooks/useInView'

type Props = {
  contact: SiteConfig['contact']
}

export function ContactSection({ contact }: Props) {
  const { ref, visible } = useInView<HTMLElement>()
  const [sent, setSent] = useState(false)
  const backend = contact.form.actionUrl

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (backend) return
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className={`section contact ${visible ? 'section--visible' : ''}`}>
      <div className="contact__intro">
        <h2 className="section__title">{contact.title}</h2>
        <p className="contact__subtitle">{contact.subtitle}</p>
        <a className="contact__email" href={contact.email}>
          Email me directly
        </a>
      </div>

      <form
        className="contact__form"
        action={backend ?? undefined}
        method={backend ? 'post' : undefined}
        onSubmit={onSubmit}
      >
        {sent ? (
          <p className="contact__notice" role="status">
            Thanks — configure <code>contact.form.actionUrl</code> in{' '}
            <code>src/config/site.ts</code> to send messages to a backend, or reach out via email
            above.
          </p>
        ) : null}

        <label className="field">
          <span className="field__label">Name</span>
          <input className="field__input" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="field__label">Email</span>
          <input
            className="field__input"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="field field--full">
          <span className="field__label">Message</span>
          <textarea className="field__input field__input--area" name="message" rows={5} required />
        </label>
        <div className="contact__actions">
          <button className="btn btn--primary" type="submit">
            Send message
          </button>
        </div>
      </form>
    </section>
  )
}
