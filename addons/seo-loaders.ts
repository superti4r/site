import type { Metadata } from "next";

export const SEO_Loaders: Metadata = {
  title: {
    default: "Bachtiar Dwi Pramudi | Fullstack Web Developer",
    template: "%s | Bachtiar Dwi Pramudi",
  },
  description:
    "Portfolio of Bachtiar Dwi Pramudi, a Fullstack Web Developer focused on web, and scalable digital solutions. Experienced in modern web technologies, clean architecture, and performance-oriented development.",
  icons: { icon: "/favicon.ico" },

  openGraph: {
    title: "Bachtiar Dwi Pramudi | Fullstack Web Developer",
    description:
      "Explore the portfolio of Bachtiar Dwi Pramudi, a developer specializing in web applications with a focus on performance, usability, and clean architecture.",
    url: "https://www.bachtiar.my.id",
    siteName: "Bachtiar Dwi Pramudi Portfolio",
    images: [
      {
        url: "https://www.bachtiar.my.id/assets/images/og.webp",
        width: 1200,
        height: 630,
        alt: "Bachtiar Dwi Pramudi – Fullstack Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bachtiar Dwi Pramudi | Fullstack Web Developer",
    description:
      "Portfolio showcasing web projects by Bachtiar Dwi Pramudi, focused on performance, scalability, and real-world solutions.",
    images: ["https://www.bachtiar.my.id/assets/images/og.webp"],
    creator: "@bachtiardwipramudi",
  },

  alternates: {
    canonical: "https://www.bachtiar.my.id",
    languages: {
      "en-US": "https://www.bachtiar.my.id/en",
      "id-ID": "https://www.bachtiar.my.id/id",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "bachtiar dwi pramudi",
    "bachtiar dwi pramudi portfolio",
    "fullstack developer",
    "web developer indonesia",
    "laravel developer",
    "next.js developer",
    "software engineer portfolio",
  ],

  creator: "Bachtiar Dwi Pramudi",
  authors: [
    {
      name: "Bachtiar Dwi Pramudi",
      url: "https://www.bachtiar.my.id",
    },
  ],
};

export default SEO_Loaders;
