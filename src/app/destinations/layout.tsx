import { Metadata } from 'next';
import { PAGE_SEO, getCanonicalUrl, generateBreadcrumbList } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_SEO.destinations.title,
  description: PAGE_SEO.destinations.description,
  keywords: PAGE_SEO.destinations.keywords,
  openGraph: {
    title: PAGE_SEO.destinations.title,
    description: PAGE_SEO.destinations.description,
    url: getCanonicalUrl('/destinations'),
    type: 'website',
    images: [
      {
        url: '/images/og-destinations.jpg',
        width: 1200,
        height: 630,
        alt: 'Explore Jammu Kashmir & Ladakh Destinations',
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl('/destinations'),
  },
};

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'Destinations', url: '/destinations' },
]);

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {children}
    </>
  );
}
