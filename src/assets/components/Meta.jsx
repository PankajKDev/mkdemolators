
import { Helmet } from 'react-helmet-async';

const Meta = () => {
  return (
    <Helmet>
      <title>M.K. Demolators - Professional Building Demolition Services in Delhi</title>
      <meta name="description" content="M.K. Demolators offers safe, efficient, and eco-friendly demolition services for residential, commercial, and industrial projects in Delhi and surrounding areas. Get free estimates for your demolition needs." />
      <meta name="keywords" content="demolition services Delhi, building demolition, concrete removal, site clearance, asbestos abatement, wrecking services, construction demolition, demolition cost estimate, local demolition company" />
      <meta name="author" content="M.K. Demolators" />
      <meta property="og:title" content="M.K. Demolators - Reliable Demolition Contractors in Delhi" />
      <meta property="og:description" content="Trust M.K. Demolators for professional demolition services in Delhi. We offer safe, efficient, and eco-friendly solutions for all types of demolition projects." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mkdemolators.com" />
      <meta property="og:image" content="/logo.png" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "M.K. Demolators",
            "image": "/logo.png",
            "url": "https://mkdemolators.com",
            "telephone": "+91 9911775859",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Paschim Vihar",
              "addressLocality": "Delhi",
              "postalCode": "110087",
              "addressCountry": "India"
            },
            "openingHours": [
              "Monday - Friday: 9am - 11pm",
              "Saturday: 9am - 11pm"
            ],
            "sameAs":["https://www.facebook.com/demolators"],
         
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.704060,
              "longitude": 77.102493
            },
            "review": {
              "@type": "Review",
              "author": "Subash Aggrawal",
              "datePublished": "2023-01-15",
              "reviewBody": "M.K Demolators provided exceptional service! Their team was professional, efficient, and respectful of our property. The demolition was completed ahead of schedule, and they left the site clean and safe. Highly recommend them for any demolition needs!",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default Meta;
