import { Metadata } from 'next';
import { PAGE_SEO, getCanonicalUrl, generateBreadcrumbList } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_SEO.tours.title,
  description: PAGE_SEO.tours.description,
  keywords: PAGE_SEO.tours.keywords,
  openGraph: {
    title: PAGE_SEO.tours.title,
    description: PAGE_SEO.tours.description,
    url: getCanonicalUrl('/tours'),
    type: 'website',
    images: [
      {
        url: '/images/og-tours.jpg',
        width: 1200,
        height: 630,
        alt: 'Kashmir Tour Packages - Journeu',
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl('/tours'),
  },
};

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'Tour Packages', url: '/tours' },
]);

export default function ToursLayout({
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
