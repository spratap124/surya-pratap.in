/**
 * Site content & behavior — edit this file to customize the portfolio.
 * Optional image URLs can be added per project; cards use a gradient fallback when omitted.
 */
export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  id: 'github' | 'linkedin' | 'stackoverflow' | 'youtube' | 'twitter'
  label: string
  href: string
}

export type Project = {
  title: string
  href: string
  /** e.g. "Web" — must match an entry in `projectCategories` or add a new one */
  category: string
  /** Optional screenshot; leave out for gradient-only card */
  image?: string
  /** CSS `object-position` when using a shared / wide screenshot (e.g. "15% center", "85% center") */
  imagePosition?: string
  /** Override CTA line under the title (default: repo vs Chrome Web Store from `href`) */
  linkLabel?: string
}

export type ExperienceItem = {
  company: string
  role: string
  /** e.g. "Bengaluru, India" */
  location?: string
  /** Human-readable range, e.g. "Jun 2025 — Present" */
  period: string
  /** Key wins / scope — keep concise for scanning */
  highlights?: string[]
}

export type SiteConfig = {
  meta: {
    title: string
    description: string
  }
  identity: {
    name: string
    /** Short role line under the name */
    role: string
    /** Hero headline (can include \n for a manual line break) */
    headline: string
    lede: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  nav: NavItem[]
  experience: {
    title: string
    subtitle?: string
    items: ExperienceItem[]
  }
  about: {
    title: string
    /** Paragraphs shown in order */
    paragraphs: string[]
  }
  projects: {
    title: string
    /** Filter chips; first is selected by default */
    categories: string[]
    items: Project[]
  }
  contact: {
    title: string
    subtitle: string
    /** Shown as primary action if form has no backend */
    email: string
    form: {
      /** Set when using Formspree, Netlify Forms, etc. */
      actionUrl?: string
    }
  }
  social: SocialLink[]
  footer: {
    note: string
  }
}

export const site: SiteConfig = {
  meta: {
    title: 'Surya Pratap — Senior Frontend Engineer',
    description:
      'Senior Frontend Developer with 12+ years of experience in React, TypeScript, micro-frontends, and scalable web platforms. SMTS @ Salesforce; previously Atlassian, Visa, and Lowe’s.',
  },
  identity: {
    name: 'Surya Pratap',
    role: 'Senior Frontend Developer · 12+ years',
    headline: 'Scalable frontends\nfor high-impact products.',
    lede:
      'I specialize in React, TypeScript, and micro-frontend architecture — shipping modular platforms, tightening performance and accessibility, and leading frontend standards across teams. Background includes SMTS @ Salesforce and senior engineering roles at Atlassian, Visa, and Lowe’s, with a focus on mentoring engineers and partnering with design and product to deliver maintainable, localized experiences at scale.',
    primaryCta: { label: 'View projects', href: '#work' },
    secondaryCta: { label: 'Contact', href: '#contact' },
  },
  nav: [
    { id: 'intro', label: 'Intro' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],
  experience: {
    title: 'Experience',
    subtitle: 'A condensed work history — full details on LinkedIn.',
    items: [
      {
        company: 'Salesforce',
        role: 'Senior Member of Technical Staff (SMTS)',
        location: 'Hyderabad, India',
        period: 'Jun 2025 — Present',
      },
      {
        company: 'Atlassian',
        role: 'Software Development Engineer II',
        location: 'Bengaluru, India',
        period: 'Nov 2020 — May 2025',
        highlights: [
          'Led a scalable unified frontend platform using micro-frontend architecture and independent deployments.',
          'Defined frontend standards: performance, accessibility, Redux & Context state management.',
          'Owned localization for 3+ locales on Atlassian Partner Portal (i18n best practices).',
          'Improved page load time ~25% via lazy loading and other optimizations.',
          'Mentored frontend engineers, code reviews, and team workflows.',
        ],
      },
      {
        company: 'Visa',
        role: 'Senior UI Engineer',
        location: 'India',
        period: 'Jul 2019 — Nov 2020',
        highlights: [
          'Built pixel-perfect UI for intranet portal Insite; scalable architecture for future features.',
          'Reduced load times ~25% through rendering and asset optimizations.',
          'Drove responsiveness and accessibility across devices.',
        ],
      },
      {
        company: 'Lowe’s India',
        role: 'Full Stack Developer',
        location: 'Bengaluru, India',
        period: 'Apr 2017 — Jun 2019',
        highlights: [
          'Store Locator: listing & details; View Quotes for flooring installation workflows.',
          'React, Node.js, and REST APIs for scalable frontend features.',
        ],
      },
      {
        company: 'Accenture',
        role: 'Software Engineer',
        location: 'Bengaluru, India',
        period: 'Nov 2015 — Apr 2017',
        highlights: [
          'Responsive web apps with HTML5, CSS3, JavaScript; AngularJS, React, Angular, jQuery, Bootstrap.',
          'UI enhancements and performance work; integration with backend services.',
        ],
      },
      {
        company: 'Accenture',
        role: 'Associate Software Engineer',
        location: 'Bengaluru, India',
        period: 'Jun 2014 — Nov 2015',
      },
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      "I'm Surya Pratap — a Senior Frontend Developer with 12+ years in large-scale web applications. My work spans React, Redux, TypeScript, Node.js, and Webpack, with deep experience in micro-frontend architecture (including module federation), monorepos, responsive UI, localization (react-intl, Format.js), and performance optimization.",
      'I lead frontend architecture decisions, mentor engineers, and run code reviews — fostering clear standards around accessibility, state management, and build pipelines. I collaborate closely with cross-functional partners to ship scalable, maintainable products in fast-moving environments.',
      'Top strengths include styled-components, Apollo GraphQL, and mentoring. I’m motivated by technical excellence, continuous learning, and contributing to platforms that reach real users at scale.',
    ],
  },
  projects: {
    title: 'Projects',
    categories: ['All', 'Web', 'Apps'],
    items: [
      {
        title: 'European Restaurant',
        href: 'https://github.com/spratap124/Food-Ordering-Angular',
        category: 'Web',
        image: '/projects/european-restaurant.png',
      },
      {
        title: 'Beercraft',
        href: 'https://github.com/spratap124/Beercraft',
        category: 'Web',
        image: '/projects/beercraft.png',
      },
      {
        title: 'SMARTQ',
        href: 'https://github.com/spratap124/Food-Ordering',
        category: 'Web',
        image: '/projects/smartq.png',
      },
      {
        title: 'Snake Game',
        href: 'https://suryapratap.in/projects/SnakeGame_v1.html',
        category: 'Apps',
        image: '/projects/snake-game.png',
        linkLabel: 'Open demo →',
      },
      {
        title: 'Bookmarkify',
        href:
          'https://chromewebstore.google.com/detail/bookmarkify/dnbnfomolmfanljmiaeenbmdefpiaadd',
        category: 'Apps',
        image: '/projects/bookmarkify.png',
      },
      {
        title: 'Game Lister',
        href: 'https://github.com/spratap124/Gamelister',
        category: 'Web',
        image: '/projects/game-lister.png',
      },
    ],
  },
  contact: {
    title: 'Get in touch',
    subtitle:
      'Recruiting, collaboration, or engineering leadership conversations — I’d be glad to connect.',
    email: 'mailto:spratap124@gmail.com',
    form: {
      // Example: 'https://formspree.io/f/your-id'
      actionUrl: undefined,
    },
  },
  social: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/spratap124/' },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/spratap124/',
    },
    {
      id: 'stackoverflow',
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/2627890/spratap124',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCzl6g-dG9i_HM9EqQ0_F1wA',
    },
  ],
  footer: {
    note:
      '“Design is not just what it looks like — design is how it works.” — Steve Jobs',
  },
}
