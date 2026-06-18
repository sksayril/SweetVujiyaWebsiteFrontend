import type { Metadata, Viewport } from 'next';
import { Cinzel_Decorative } from 'next/font/google';
import AppShell from '@/components/AppShell';
import './globals.css';

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const siteUrl = 'https://krishnakanha.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Krishna & Kanha Sales Enterprises - Authentic Indian Sweets & Premium Namkeen',
  description:
    'Discover authentic Indian sweets and premium namkeen from Krishna & Kanha Sales Enterprises. Traditional recipes, pure ingredients, and nationwide delivery. Order fresh laddus, boondi, and more!',
  keywords: [
    'Indian sweets',
    'namkeen',
    'laddus',
    'boondi',
    'traditional sweets',
    'premium namkeen',
    'Krishna Kanha',
    'Kanpur sweets',
    'online sweets delivery',
  ],
  authors: [{ name: 'Krishna & Kanha Sales Enterprises' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Krishna & Kanha Sales Enterprises - Authentic Indian Sweets & Premium Namkeen',
    description:
      'Discover authentic Indian sweets and premium namkeen from Krishna & Kanha Sales Enterprises. Traditional recipes, pure ingredients, and nationwide delivery.',
    siteName: 'Krishna & Kanha Sales Enterprises',
    images: [{ url: '/img9.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna & Kanha Sales Enterprises - Authentic Indian Sweets & Premium Namkeen',
    description:
      'Discover authentic Indian sweets and premium namkeen from Krishna & Kanha Sales Enterprises. Traditional recipes, pure ingredients, and nationwide delivery.',
    images: ['/img9.jpeg'],
  },
  icons: {
    icon: '/img9.jpeg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Krishna & Kanha',
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Krishna & Kanha Sales Enterprises',
  description: 'Authentic Indian sweets and premium namkeen manufacturer and retailer',
  url: siteUrl,
  logo: `${siteUrl}/img9.jpeg`,
  image: `${siteUrl}/img9.jpeg`,
  telephone: '+91 6392574854',
  email: 'krishnakanhasalesenterprises@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ramadevi, I.1-87, Sangava Road',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208021',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 09:00-22:00',
  priceRange: '₹₹',
  servesCuisine: ['Indian', 'Traditional Sweets', 'Namkeen'],
  hasMenu: `${siteUrl}/products`,
  foundingDate: '1999',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1250',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${cinzel.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
