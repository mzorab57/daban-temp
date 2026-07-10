import { Helmet } from "react-helmet-async";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Daban Holding",
  description:
    "Daban Holding is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.",
  foundingDate: "2013",
  founder: { "@type": "Person", name: "Evgeny Demidenko" },
  url: "https://dabanholding.com",
  logo: {
    "@type": "ImageObject",
    url: "https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68fb29621db5bec757204250_bd047a5208d9d1f5339a58235598af09_section.svg",
  },
  image: [
    {
      "@type": "ImageObject",
      url: "https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9ddb4432de688d8f96eb1_img_hero-front-over.webp",
    },
    {
      "@type": "ImageObject",
      url: "https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d271e6fb5a0b3f61e86592_img_jet-v.2.webp",
      caption: "Jet gulfstream 650ER",
    },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  telephone: "+971544325050",
  email: "info@dabanholding.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971544325050",
    email: "info@dabanholding.com",
    contactType: "customer service",
    availableLanguage: "en",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  slogan: "We are movement. We are distinction. Your freedom to enjoy life.",
  inLanguage: "en",
  serviceType: "Private Jet Charter",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 5000,
    description: "missions completed",
  },
  makesOffer: [
    {
      "@type": "Service",
      name: "Private Jet Charter",
      description:
        "Global private aviation services with ultra-long-range aircraft",
      provider: { "@type": "Organization", name: "Daban Holding" },
      areaServed: { "@type": "Place", name: "150+ countries worldwide" },
    },
    {
      "@type": "Service",
      name: "Pet Travel Services",
      description:
        "Traveling with pets on a private jet means comfort and peace of mind for both owners and their companions. Our dedicated team ensures seamless arrangements, from documentation and safety to onboard care.",
      provider: { "@type": "Organization", name: "Daban Holding" },
    },
    {
      "@type": "Service",
      name: "24/7 Availability",
      description:
        "Our team is available around the clock to handle any request, no matter the time zone or urgency. From last-minute flight arrangements to personalized services, we provide seamless support whenever you need it.",
      provider: { "@type": "Organization", name: "Daban Holding" },
    },
    {
      "@type": "Service",
      name: "Onboard Services",
      description:
        "Every flight is tailored with a range of personalized onboard services designed to elevate your journey. From fine dining and curated entertainment to attentive crew and seamless connectivity, every detail is arranged to ensure maximum comfort and enjoyment in the air.",
      provider: { "@type": "Organization", name: "Daban Holding" },
    },
  ],
  owns: {
    "@type": "Product",
    name: "Gulfstream 650ER",
    description:
      "Featuring wings designed to minimize anything that could disrupt its natural aerodynamic balance, and powered by high-thrust Rolls-Royce BR725 AI-12 engines, the Gulfstream G650 is engineered for exceptional range and top-end speed.",
    brand: { "@type": "Brand", name: "Gulfstream" },
    model: "650ER",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Maximum operating range", value: "11,263 km" },
      { "@type": "PropertyValue", name: "Speed", value: "480 knots" },
      {
        "@type": "PropertyValue",
        name: "Passenger capacity",
        value: "Up to 12 seats (+1 cabin server)",
      },
      {
        "@type": "PropertyValue",
        name: "Endurance",
        value: "14 hrs (Maximum for european based aircraft)",
      },
      { "@type": "PropertyValue", name: "Baggage capacity", value: "5.52 m3" },
      { "@type": "PropertyValue", name: "Cruising altitude", value: "15,544 m" },
      { "@type": "PropertyValue", name: "Cabin length", value: "14.05 m2" },
      { "@type": "PropertyValue", name: "Cabin Width", value: "2.49 m2" },
      { "@type": "PropertyValue", name: "Cabin Height", value: "1.92 m2" },
    ],
  },
};

export default function SiteHead() {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
        "data-wf-domain": "dabanholding.com",
        "data-wf-page": "68b57ef5ef86011d9b251e8a",
        "data-wf-site": "68b57ef5ef86011d9b251e8e",
      }}
    >
      <title>Daban Holding</title>
      <link href="https://cdn.prod.website-files.com" rel="preconnect" crossOrigin="anonymous" />
      <link rel="alternate" hrefLang="x-default" href="https://dabanholding.com/" />
      <link rel="alternate" hrefLang="en" href="https://dabanholding.com/" />
      <link rel="alternate" hrefLang="ru" href="https://dabanholding.com/ru" />
      <link rel="preload" as="image" href="https://pub-8090965640ca4bd1b63bf23a3ab20377.r2.dev/object.webp" fetchpriority="high" />
      <meta
        name="description"
        content="Our aircraft are among the first to deliver clients to the most iconic international events. Among DS Jets’ clients are some of the world’s leading companies in the nuclear industry, as well as in the oil and banking sectors."
      />
      <meta property="og:title" content="Daban Holding" />
      <meta
        property="og:description"
        content="Our aircraft are among the first to deliver clients to the most iconic international events. Among DS Jets’ clients are some of the world’s leading companies in the nuclear industry, as well as in the oil and banking sectors."
      />
      <meta
        property="og:image"
        content="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68dbce4d905aab5a30362299_img_og.avif"
      />
      <meta name="twitter:title" content="Daban Holding" />
      <meta
        name="twitter:description"
        content="Our aircraft are among the first to deliver clients to the most iconic international events. Among DS Jets’ clients are some of the world’s leading companies in the nuclear industry, as well as in the oil and banking sectors."
      />
      <meta
        name="twitter:image"
        content="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68dbce4d905aab5a30362299_img_og.avif"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:video" content="https://pub-0b16d9d13b1345e190ead530877e618a.r2.dev/og.mp4" />
      <meta
        property="og:video:secure_url"
        content="https://pub-0b16d9d13b1345e190ead530877e618a.r2.dev/og.mp4"
      />
      <meta property="og:video:type" content="video/mp4" />
      <meta property="og:video:width" content="1200" />
      <meta property="og:video:height" content="630" />
      <link
        href="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/css/jeskojets.webflow.shared.c930478cf.min.css"
        rel="stylesheet"
        type="text/css"
        integrity="sha384-yTBHjP90IjAKbdyVBgupsf4X/z6tU0GWIR/5UtriNSv1oKDkL8bwHisrYwUgDDWh"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d5b157ea29e138590eb3fe_fav_32x32.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d5b15bfb8f0cc62d1806d9_fav_256x256.png"
        rel="apple-touch-icon"
      />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
