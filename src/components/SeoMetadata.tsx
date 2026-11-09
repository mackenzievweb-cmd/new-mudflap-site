import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteUrl = "https://themudflapguyusa.com";

const metadataByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Custom Mudflaps | Professional Truck Accessories | Made to Order",
    description:
      "Premium custom mudflaps for semi-trucks, pickup trucks, and commercial vehicles. Expert craftsmanship, custom branding options, and fast turnaround times. Get your quote today!",
  },
  "/products": {
    title: "Custom Truck Mudflaps & Snow Products",
    description:
      "Explore durable custom mudflaps, snow deflectors, and mounting brackets for commercial trucks, trailers, and specialty vehicles.",
  },
  "/gallery": {
    title: "Custom Mudflap Gallery | The Mudflap Guy",
    description:
      "See custom branded mudflaps made for truck dealerships, fleets, trailer companies, and specialty vehicle businesses.",
  },
  "/how-it-works": {
    title: "How Custom Mudflaps Work | The Mudflap Guy",
    description:
      "Learn how The Mudflap Guy makes ordering custom truck mudflaps simple, from choosing materials to approving your design.",
  },
  "/faq": {
    title: "Custom Mudflap FAQs | The Mudflap Guy",
    description:
      "Find answers about custom mudflap sizing, materials, branding, installation, turnaround times, and ordering.",
  },
  "/about": {
    title: "About The Mudflap Guy | Custom Truck Accessories",
    description:
      "Learn about The Mudflap Guy and our commitment to quality custom mudflaps, dependable service, and durable truck accessories.",
  },
  "/contact": {
    title: "Get a Custom Mudflap Quote | The Mudflap Guy",
    description:
      "Request a free quote for custom truck mudflaps, branded fleet orders, snow products, and custom sizing from The Mudflap Guy.",
  },
};

const SeoMetadata = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const metadata = metadataByPath[normalizedPath] ?? {
    title: "Page Not Found | The Mudflap Guy",
    description: "The page you requested could not be found. Return to The Mudflap Guy to explore custom truck mudflaps and accessories.",
  };
  const canonicalUrl = `${siteUrl}${normalizedPath}`;

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Mudflap Guy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
    </Helmet>
  );
};

export default SeoMetadata;
