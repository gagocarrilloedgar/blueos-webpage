import type { Metadata } from "next";
import { Toaster } from "sonner";

import { CSPostHogProvider } from "@/lib/analytics/CSPostHogProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlueDesk",
  description: "Effortless helpdesk system for AI projects",
  applicationName: "BlueDesk",
  authors: [
    { name: "Edgar Gago Carrillo", url: "github.com/gagocarrilloedgar" }
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI project helpdesk",
    "API-first helpdesk system",
    "Multi-tenant support desk",
    "Mail to ticket conversion",
    "Helpdesk components",
    "AI support platform",
    "Configurable portal access",
    "Role-based helpdesk",
    "Customer support API",
    "Ticket management system",
    "AI project support",
    "Helpdesk integration",
    "Support ticket automation",
    "Multi-tenant architecture",
    "Customer portal roles",
    "Help desk software",
    "AI customer service",
    "Support system components",
    "Ticket tracking system",
    "Email to ticket system"
  ],
  creator: "Edgar Gago Carrillo",
  publisher: "gagocarrilloedgar",
  openGraph: {
    title: "BlueDesk | Effortless Helpdesk for AI Projects",
    description: "API-first helpdesk system with ready-to-use components",
    url: "https://useBlueDesk.com",
    siteName: "BlueDesk | AI Project Helpdesk",
    images: [
      {
        url: "https://useBlueDesk.com/og-image.png",
        width: 1440,
        height: 832,
        alt: "AI Project Helpdesk Home"
      }
    ],
    locale: "en",
    type: "website"
  },
  // Twitter metadata
  twitter: {
    title: "BlueDesk | Effortless Helpdesk for AI Projects",
    description: "API-first helpdesk system with ready-to-use components",
    creator: "@gagocarrilloedgar",
    images: ["https://useBlueDesk.com/twitter-image.png"]
  },
  manifest: "/manfinest.json"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body>{children}</body>
        <Toaster richColors position="bottom-right" />
      </CSPostHogProvider>
    </html>
  );
}
