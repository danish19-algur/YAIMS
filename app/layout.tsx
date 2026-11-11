import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { LanguageProvider } from '@/components/language-context'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yaimssteel.com'),
  title: 'YAIMS Steel Industries | Tractor Dozers, Loaders & Agro Implements',
  description:
    'Direct manufacturer of tractor dozers, front loaders, tipping trailers, sugarcane trailers and agro implements in Jamkhandi, Karnataka. Built for Industry. Made for Progress.',
  keywords: [
    'tractor dozer manufacturer',
    'tractor dozer Jamkhandi',
    'tractor loader Karnataka',
    'tipping trailer manufacturer Bagalkot',
    'sugarcane trailer',
    'agricultural trailer',
    'land leveller',
    'agro implements',
    'custom fabrication Karnataka',
    'YAIMS Steel Industries',
    'Jamkhandi manufacturer',
  ],
  icons: {
    icon: [
      { url: '/images/yaims-logo.png' },
      { url: '/icon.png' },
    ],
    shortcut: '/images/yaims-logo.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'YAIMS Steel Industries | Tractor Dozers & Trailers',
    description:
      'Direct manufacturer of heavy-duty tractor dozers, tipping trailers, sugarcane trailers & agro implements in Jamkhandi, Karnataka.',
    url: 'https://yaimssteel.com',
    siteName: 'YAIMS Steel Industries',
    images: [
      {
        url: '/images/yaims-real/trailer-tipping-4wheel.jpg',
        width: 1200,
        height: 630,
        alt: 'YAIMS Heavy Duty 4-Wheel Tipping Trailer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAIMS Steel Industries | Tractor Dozers & Trailers',
    description:
      'Direct manufacturer of heavy-duty tractor dozers, tipping trailers, sugarcane trailers & agro implements in Jamkhandi, Karnataka.',
    images: ['/images/yaims-real/trailer-tipping-4wheel.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2d5b',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Y.A.I.M.S. Steel Industries',
  alternateName: 'YAIMS Steel Industries',
  description:
    'Direct manufacturer of tractor dozers, front loaders, 4-wheel tipping trailers, sugarcane trailers and agro implements in Jamkhandi, Karnataka.',
  url: 'https://yaimssteel.com',
  logo: 'https://yaimssteel.com/images/yaims-logo.png',
  image: 'https://yaimssteel.com/images/yaims-real/trailer-tipping-4wheel.jpg',
  telephone: '+919448436605',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'KSSIDC, Plot No.10, Rambag Industrial Estate, Jambagi Road',
    addressLocality: 'Jamkhandi',
    addressRegion: 'Karnataka',
    postalCode: '587301',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 16.505,
    longitude: 75.295,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://wa.me/919448436605',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light bg-background">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SmoothScroll>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
