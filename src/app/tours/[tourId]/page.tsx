import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TourDetailClient from './TourDetailClient';
import { tours } from '@/data/toursData';
import {
  generateTourSEO,
  generateTourSchema,
  generateProductSchema,
  generateBreadcrumbList,
  generateFAQSchema,
  getCanonicalUrl,
} from '@/lib/seo';

// Get tour data by ID
function getTourById(tourId: string) {
  return tours.find(tour => tour.id === tourId);
}

// Generate static params for all tours
export async function generateStaticParams() {
  return tours.map((tour) => ({
    tourId: tour.id,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tourId: string }>;
}): Promise<Metadata> {
  const { tourId } = await params;
  const tour = getTourById(tourId);

  if (!tour) {
    return {
      title: 'Tour Not Found',
      description: 'The requested tour package could not be found.',
    };
  }

  const seo = generateTourSEO(tour);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getCanonicalUrl(`/tours/${tourId}`),
      type: 'website',
      images: [
        {
          url: tour.image || '/images/og-tours.jpg',
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    alternates: {
      canonical: getCanonicalUrl(`/tours/${tourId}`),
    },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ tourId: string }>;
}) {
  const { tourId } = await params;
  const tour = getTourById(tourId);

  if (!tour) {
    notFound();
  }

  // Generate structured data
  const breadcrumbData = generateBreadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Tour Packages', url: '/tours' },
    { name: tour.title, url: `/tours/${tourId}` },
  ]);

  const tourSchema = generateTourSchema({
    id: tour.id,
    title: tour.title,
    description: tour.description,
    price: tour.price,
    duration: tour.duration,
    image: tour.image,
    itinerary: tour.itinerary,
  });

  const productSchema = generateProductSchema({
    id: tour.id,
    title: tour.title,
    description: tour.description,
    price: tour.price,
    rating: tour.rating,
    reviews: tour.reviews,
    image: tour.image,
    duration: tour.duration,
  });

  // FAQ schema if tour has FAQs
  const faqSchema = tour.faqs?.length
    ? generateFAQSchema(tour.faqs)
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <TourDetailClient />
    </>
  );
}
