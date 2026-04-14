import type { SiteConfig } from '../config/site'
import { useInView } from '../hooks/useInView'

type Props = {
  config: SiteConfig['identity']
}

export function Hero({ config }: Props) {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="intro" ref={ref} className={`hero ${visible ? 'hero--visible' : ''}`}>
      <div className="hero__grid" aria-hidden />
      <div className="hero__content">
        <p className="hero__eyebrow">{config.role}</p>
        <h1 className="hero__title">
          {config.headline.split('\n').map((line, i) => (
            <span key={i} className="hero__title-line">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__lede">{config.lede}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={config.primaryCta.href}>
            {config.primaryCta.label}
          </a>
          {config.secondaryCta ? (
            <a className="btn btn--ghost" href={config.secondaryCta.href}>
              {config.secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
      <div className="hero__panel" aria-hidden>
        <div className="hero__orbit" />
        <div className="hero__code">
          <span className="hero__code-comment">{'// Platform · MFA · performance'}</span>
          <br />
          <span className="hero__code-keyword">const</span> stack = {'{'}
          <br />
          {'  '}<span className="hero__code-prop">react</span>
          <span className="hero__code-punct">:</span> <span className="hero__code-keyword">true</span>
          <span className="hero__code-punct">,</span>
          <br />
          {'  '}<span className="hero__code-prop">typescript</span>
          <span className="hero__code-punct">:</span> <span className="hero__code-keyword">true</span>
          <span className="hero__code-punct">,</span>
          <br />
          {'  '}<span className="hero__code-prop">microFrontends</span>
          <span className="hero__code-punct">:</span>{' '}
          <span className="hero__code-string">'module-federation'</span>
          <br />
          <span className="hero__code-punct">{'}'}</span>
          <span className="hero__code-punct">;</span>
        </div>
      </div>
    </section>
  )
}
