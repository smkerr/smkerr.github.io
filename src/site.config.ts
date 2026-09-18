// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Steven Kerr',
  role: 'Data scientist working on public policy',
  email: 'steven.miles.k@gmail.com',
  tagline: 'Data science for evidence-based public policy.',
  description:
    'Portfolio of Steven Kerr, a data scientist working across global health and climate policy, with an MSc in Data Science for Public Policy from the Hertie School.',
  status: 'Based in Berlin, Germany',
  social: [
    { label: 'GitHub', href: 'https://github.com/smkerr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stevenmileskerr' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv.pdf' },
] as const;
