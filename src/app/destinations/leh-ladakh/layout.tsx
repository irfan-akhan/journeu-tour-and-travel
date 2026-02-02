import { Metadata } from 'next';
import { PAGE_SEO, getCanonicalUrl, generateBreadcrumbList } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_SEO.ladakh.title,
  description: PAGE_SEO.ladakh.description,
  keywords: PAGE_SEO.ladakh.keywords,
  openGraph: {
    title: PAGE_SEO.ladakh.title,
    description: PAGE_SEO.ladakh.description,
    url: getCanonicalUrl('/destinations/leh-ladakh'),
    type: 'website',
    images: [
      {
        url: '/images/og-ladakh.jpg',
        width: 1200,
        height: 630,
        alt: 'Leh Ladakh Tour Packages - Adventure & Monasteries',
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl('/destinations/leh-ladakh'),
  },
};

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'Destinations', url: '/destinations' },
  { name: 'Leh Ladakh', url: '/destinations/leh-ladakh' },
]);

export default function LadakhLayout({
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
