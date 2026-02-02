import { Metadata } from 'next';
import { PAGE_SEO, getCanonicalUrl, generateBreadcrumbList } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  keywords: PAGE_SEO.about.keywords,
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: getCanonicalUrl('/about'),
    type: 'website',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Journeu - Kashmir Tour Operator',
      },
    ],
  },
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
};

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about' },
]);

export default function AboutLayout({
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
