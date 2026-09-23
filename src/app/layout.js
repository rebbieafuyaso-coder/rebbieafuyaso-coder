// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rebbieafuyaso.com"),

  title: {
    default: "Mr Technology - Rebbie Afuyaso",
    template: "%s | Rebbie Afuyaso",
  },

  description:
    "I create digital and online systems for businesses, private institutions and organizations alike. Focusing on clean code, secure architecture and minimal UI, I deliver products across different domains — from websites and apps to online systems, backends and APIs.",

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
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rebbieafuyaso.com",
    siteName: "Mr Technology - Rebbie Afuyaso",
    title: "Mr Technology - Programmer | Tech Enthusiast",
    description:
      "I create digital and online systems for businesses, private institutions and organizations alike. Clean code, secure architecture, minimal UI.",
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
      "I create digital and online systems for businesses, private institutions and organizations alike.",
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
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: "",
    // yandex: "",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}