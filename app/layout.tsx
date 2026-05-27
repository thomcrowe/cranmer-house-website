import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cranmerhouse.org'

const TITLE = 'Cranmer House | An Episcopal Campus Ministry in Tulsa'
const DESCRIPTION =
  'Ancient Faith on Tulsa Campuses. An Episcopal campus ministry at Oral Roberts University and the University of Tulsa, rooted in the Church Fathers, the Book of Common Prayer, and sacramental life.'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Episcopal campus ministry',
    'Cranmer House',
    'Dead Theologians Society',
    'ORU campus ministry',
    'TU campus ministry',
    'Oral Roberts University',
    'University of Tulsa',
    'Anglican campus ministry Tulsa',
    'Book of Common Prayer',
    'Church Fathers',
    'Fr. Thom Crowe',
    'St. Johns Episcopal Church Tulsa',
  ],
  authors: [{ name: 'Fr. Thom Crowe', url: BASE_URL }],
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Cranmer House',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  // Remove the v0 generator tag
  generator: undefined,
}

// JSON-LD structured data — ReligiousOrganization schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ReligiousOrganization', 'Organization'],
  name: 'Cranmer House',
  alternateName: 'Cranmer House Episcopal Campus Ministry',
  description: DESCRIPTION,
  url: BASE_URL,
  email: 'frthom@cranmerhouse.org',
  logo: `${BASE_URL}/icon.svg`,
  image: `${BASE_URL}/opengraph-image`,
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'EducationalOrganization',
      name: 'Oral Roberts University',
      sameAs: 'https://www.oru.edu',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'University of Tulsa',
      sameAs: 'https://utulsa.edu',
    },
  ],
  parentOrganization: {
    '@type': 'ReligiousOrganization',
    name: "St. John's Episcopal Church",
    url: 'https://www.stjohnstulsa.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4200 S. Atlanta Pl.',
      addressLocality: 'Tulsa',
      addressRegion: 'OK',
      postalCode: '74105',
      addressCountry: 'US',
    },
  },
  memberOf: {
    '@type': 'Organization',
    name: 'The Episcopal Church',
    sameAs: 'https://www.episcopalchurch.org',
  },
  sameAs: [
    'https://www.instagram.com/cranmerhouse',
    'https://www.facebook.com/cranmerhouse',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'frthom@cranmerhouse.org',
    contactType: 'Chaplain',
    name: 'Fr. Thom Crowe',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
