// app/layout.js
export const metadata = {
  // Base URL here
  metadataBase: new URL("https://rebbieafuyaso.com"),

  title: {
    default: "Mr Technology - Rebbie Afuyaso",
    template: "%s | Rebbie Afuyaso",
  },

  description:
    "I create digital and online systems for business, private institutions and organizations alike. Focusing on clean code, secure architecture and minimal UI, I deliver products across different domains from websites, to apps, online systems, backend and APIs.",

  keywords: [
    "Rebbie Afuyaso",
    "Mr Technology",
    "web development PNG",
    "Papua New Guinea web developer",
    "Papua New Guinea programmer",
    "Rebbie Afuyaso PNG",
    "PNG web dev",
  ],

  authors: [{ name: "Rebbie Afuyaso", url: "https://rebbieafuyaso.com" }],
  creator: "Mr Technology",
  publisher: "Mr Technology",

  alternates: {
    canonical: "https://rebbieafuyaso.com",
    languages: {
      "en-US": "https://rebbieafuyaso.com/en-US",
      "es-ES": "https://rebbieafuyaso.com/es-ES",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rebbieafuyaso.com",
    siteName: "Mr Technology - Rebbie Afuyaso",
    title: "Mr Technology - Programmer | Tech Enthusiast",
    description:
      "I create digital and online systems for business, private institutions and organizations alike. Focusing on clean code, secure architecture and minimal UI, I deliver products across different domains from websites, to apps, online systems, backend and APIs.",

    images: [
      {
        url: "/Rebbie-Afuyaso.png",
        width: 1200,
        height: 630,
        alt: "Rebbie (Mr Technology) Afuyaso",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mr Technology - Programmer | Tech Enthusiast",
    description:
      "I create digital and online systems for business, private institutions and organizations alike. Focusing on clean code, secure architecture and minimal UI, I deliver products across different domains from websites, to apps, online systems, backend and APIs.",

    images: ["/Rebbie-Afuyaso.png"],
    creator: "@rebbieafuyaso",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", // 16x16
    apple: "/favicon.ico", // apple-touch-icon.png
  },

  verification: {
    google: "",
    // yandex: "",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}