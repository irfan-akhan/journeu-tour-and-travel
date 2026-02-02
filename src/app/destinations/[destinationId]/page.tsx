import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DestinationDetailClient from './DestinationDetailClient';
import { getDestinationDetail, getAllDestinationIds } from '@/data/destinationDetails';
import {
  generateBreadcrumbList,
  generateFAQSchema,
  getCanonicalUrl,
} from '@/lib/seo';

// Generate static params for all destinations
export async function generateStaticParams() {
  const ids = getAllDestinationIds();
  return ids.map((destinationId) => ({
    destinationId,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ destinationId: string }>;
}): Promise<Metadata> {
  const { destinationId } = await params;
  const destination = getDestinationDetail(destinationId);

  if (!destination) {
    return {
      title: 'Destination Not Found',
      description: 'The requested destination could not be found.',
    };
  }

  const title = `${destination.name} Tour Packages | ${destination.tagline} | Journeu`;
  const description = `Explore ${destination.name} - ${destination.tagline}. ${destination.description.slice(0, 120)}... Book customized tour packages starting ₹${destination.startingPrice?.toLocaleString('en-IN') || '15,999'}.`;

  const keywords = [
    `${destination.name.toLowerCase()} tour packages`,
    `${destination.name.toLowerCase()} tourism`,
    `visit ${destination.name.toLowerCase()}`,
    `${destination.name.toLowerCase()} travel`,
    `things to do in ${destination.name.toLowerCase()}`,
    `${destination.name.toLowerCase()} holiday`,
    ...destination.tags,
    ...destination.highlights.slice(0, 5).map(h => h.toLowerCase()),
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: getCanonicalUrl(`/destinations/${destinationId}`),
      type: 'website',
      images: [
        {
          url: destination.heroImage || '/images/og-destinations.jpg',
          width: 1200,
          height: 630,
          alt: `${destination.name} - ${destination.tagline}`,
        },
      ],
    },
    alternates: {
      canonical: getCanonicalUrl(`/destinations/${destinationId}`),
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ destinationId: string }>;
}) {
  const { destinationId } = await params;
  const destination = getDestinationDetail(destinationId);

  if (!destination) {
    notFound();
  }

  // Generate structured data
  const breadcrumbData = generateBreadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Destinations', url: '/destinations' },
    { name: destination.name, url: `/destinations/${destinationId}` },
  ]);

  // Tourist destination schema
  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    image: destination.heroImage,
    url: getCanonicalUrl(`/destinations/${destinationId}`),
    address: {
      '@type': 'PostalAddress',
      addressRegion: destination.region,
      addressCountry: destination.country,
    },
    touristType: ['Adventure', 'Leisure', 'Family', 'Honeymoon'],
    includesAttraction: destination.attractions?.slice(0, 5).map(attr => ({
      '@type': 'TouristAttraction',
      name: attr.name,
      description: attr.description,
    })),
  };

  // FAQ schema if destination has FAQs
  const faqSchema = destination.faq?.length
    ? generateFAQSchema(destination.faq.map(f => ({ question: f.question, answer: f.answer })))
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <DestinationDetailClient />
    </>
  );
}
