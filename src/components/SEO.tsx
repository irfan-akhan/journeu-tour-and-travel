import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonical?: string;
  noindex?: boolean;
  schema?: object;
}

export default function SEO({
  title = "Journeu - Luxury Kashmir & Himalayas Travel Tours",
  description = "Experience the breathtaking beauty of Kashmir and the Himalayas with Journeu. Expert-guided tours, luxury accommodations, and unforgettable adventures await.",
  keywords = "kashmir tours, himalaya travel, luxury travel kashmir, srinagar tours, gulmarg packages, pahalgam travel, kashmir tourism, india travel, adventure tours",
  ogTitle,
  ogDescription,
  ogImage = "/images/og-image.jpg",
  ogUrl = "https://journeu.com",
  twitterCard = "summary_large_image",
  canonical,
  noindex = false,
  schema,
}: SEOProps) {
  const fullTitle = title.includes('Journeu') ? title : `${title} | Journeu`;
  const ogTitleFinal = ogTitle || fullTitle;
  const ogDescriptionFinal = ogDescription || description;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="author" content="Journeu Travel Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitleFinal} />
      <meta property="og:description" content={ogDescriptionFinal} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Journeu" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={ogTitleFinal} />
      <meta property="twitter:description" content={ogDescriptionFinal} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@journeu" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content="#1BA5B8" />
      <meta name="msapplication-TileColor" content="#1BA5B8" />

      {/* Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}
