import { Metadata } from 'next';
import { PAGE_SEO, getCanonicalUrl, generateBreadcrumbList } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_SEO.jammu.title,
  description: PAGE_SEO.jammu.description,
  keywords: PAGE_SEO.jammu.keywords,
  openGraph: {
    title: PAGE_SEO.jammu.title,
    description: PAGE_SEO.jammu.description,
    url: getCanonicalUrl('/destinations/jammu'),
    type: 'website',
    images: [
      {
        url: '/images/og-jammu.jpg',
        width: 1200,
        height: 630,
        alt: 'Jammu Tour Packages - Vaishno Devi & Temple Tours',
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl('/destinations/jammu'),
  },
};

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'Destinations', url: '/destinations' },
  { name: 'Jammu', url: '/destinations/jammu' },
]);

export default function JammuLayout({
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
