import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  keywords, 
  schema, 
  breadcrumb,
  canonicalUrl,
  robotsContent = 'index, follow',
  lang = 'en-KE' // Default to Kenyan English
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Peter Maina" />
      <meta name="robots" content={robotsContent} />
      <meta name="geo.region" content="KE" /> {/* Specify Kenya as the region */}
      <meta name="geo.placename" content="Nairobi" /> {/* Specify Nairobi as the place */}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_KE" /> {/* Kenyan English locale */}
      <meta property="og:site_name" content="Jeermascript Agency" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@jeermascript" />
      <meta name="twitter:creator" content="@jeermascript" />

      {/* Canonical Tag */}
      <link rel="canonical" href={canonicalUrl || url} />

      {/* Favicon */}
      <link rel="icon" type="image/jpg" href="https://i.ibb.co/nLss8dd/logo.jpg" />

      {/* Alternate language versions if you have them */}
      <link rel="alternate" hreflang="en-KE" href={url} />
      <link rel="alternate" hreflang="sw-KE" href={`${url}/sw`} /> {/* If you have a Swahili version */}

      {/* JSON-LD for structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {/* Breadcrumb JSON-LD */}
      {breadcrumb && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      )}

      {/* Local Business Schema (adjust as needed) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jeermascript Agency",
          "image": "https://i.ibb.co/nLss8dd/logo.jpg",
          "@id": "https://jeermascriptagency.africa/",
          "url": "https://jeermascriptagency.africa/",
          "telephone": "+25416517964",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Thome 5",
            "addressLocality": "Nairobi",
            "postalCode": "00100",
            "addressCountry": "KE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.2921, // Replace with your actual coordinates
            "longitude": 36.8219
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61557293284465",
            "https://www.x.com/Jermaine_writes",
            "https://www.linkedin.com/in/jermainekariuki/"
          ] 
        })}
      </script>

      {/* Google Analytics (if you're using it) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QYQRS0390"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1QYQRS0390');
        `}
      </script>
    </Helmet>
  );
};

export default SEO;