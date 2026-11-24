// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Steven Kerr',
  role: 'Data scientist working on public policy',
  email: 'steven.miles.k@gmail.com',
  tagline: 'Data science for evidence-based public policy.',
  description:
    'Portfolio of Steven Kerr, a data scientist and co-lead of the data science team at CPC Analytics, working on global health and development finance for the WHO and NGOs.',
  status: 'Based in Berlin, Germany',
  social: [
    { label: 'GitHub', href: 'https://github.com/smkerr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stevenmileskerr' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0001-8240-7899' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'CV', href: '/Steven_Kerr_CV.pdf' },
  { label: 'Contact', href: '/contact' },
] as const;
