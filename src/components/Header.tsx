import { useEffect, useState } from "react";
import type { NavItem } from "../config/site";

type Props = {
  name: string;
  nav: NavItem[];
};

export function Header({ name, nav }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="site-header__inner">
        <button type="button" className="site-logo" onClick={() => go("intro")}>
          {name}
          <span className="site-logo__dot">.</span>
        </button>

        <nav className="site-nav" aria-label="Primary">
          <ul
            id="primary-nav"
            className={`site-nav__list ${open ? "site-nav__list--open" : ""}`}
          >
            {nav.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="site-nav__link"
                  onClick={() => go(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`burger ${open ? "burger--open" : ""}`}
            aria-hidden
          />
        </button>
      </div>
    </header>
  );
}
