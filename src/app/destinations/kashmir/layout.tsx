import { Metadata } from 'next';
import { PAGE_SEO, getCanonicalUrl, generateBreadcrumbList } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_SEO.kashmir.title,
  description: PAGE_SEO.kashmir.description,
  keywords: PAGE_SEO.kashmir.keywords,
  openGraph: {
    title: PAGE_SEO.kashmir.title,
    description: PAGE_SEO.kashmir.description,
    url: getCanonicalUrl('/destinations/kashmir'),
    type: 'website',
    images: [
      {
        url: '/images/og-kashmir.jpg',
        width: 1200,
        height: 630,
        alt: 'Kashmir Tour Packages - Paradise on Earth',
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl('/destinations/kashmir'),
  },
};

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'Destinations', url: '/destinations' },
  { name: 'Kashmir', url: '/destinations/kashmir' },
]);

export default function KashmirLayout({
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
