import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harihar-sandwich.in"),
  title: "Harihar Sandwich | Fresh, Loaded & Desi",
  description: "Freshly grilled, generously loaded sandwiches packed with Indian flavours. Bhopal's favourite QSR sandwich franchise.",
  keywords: ["Harihar Sandwich", "Bhopal Sandwich", "Grilled Sandwich", "Indian QSR", "Sandwich Franchise Bhopal", "Fresh Loaded Sandwich"],
  icons: {
    icon: "/images/logo/profile.jpg",
    shortcut: "/images/logo/profile.jpg",
    apple: "/images/logo/profile.jpg",
  },
  openGraph: {
    title: "Harihar Sandwich | Fresh, Loaded & Desi",
    description: "Bhopal's Sandwich Obsession. Freshly grilled, loaded with cheese & Indian spice.",
    url: "https://harihar-sandwich.in",
    siteName: "Abhideep Harihar Sandwich",
    images: [
      {
        url: "/images/hero/hero-sandwich.jpg",
        width: 1200,
        height: 630,
        alt: "Abhideep Harihar Sandwich",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "name": "Abhideep Harihar Sandwich",
    "image": "https://harihar-sandwich.in/images/hero/hero-sandwich.jpg",
    "telephone": "+91 98765 43210",
    "email": "hello@harihar-sandwich.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 12, Zone - 1, MP Nagar",
      "addressLocality": "Bhopal",
      "addressRegion": "MP",
      "postalCode": "462011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2332,
      "longitude": 77.4343
    },
    "priceRange": "₹89 - ₹159",
    "servesCuisine": "Indian Fast Food, Grilled Sandwiches",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "23:00"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-brand-darkText bg-brand-cream selection:bg-brand-yellow selection:text-brand-darkGreen">
        {children}
      </body>
    </html>
  );
}
