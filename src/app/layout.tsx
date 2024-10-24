import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "BlueOS",
  description: "Delightfully simple client management for freelancers",
  applicationName: "BlueOS",
  authors: [
    { name: "Edgar Gago Carrillo", url: "github.com/gagocarrilloedgar" }
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Slack alternative for freelancers",
    "Notion alternative for freelancers",
    "Project management for freelancers",
    "Freelancer Client Management",
    "Client Organization Tool for Freelancers",
    "Manage Clients Easily",
    "Freelance Project Management",
    "Client Communication Platform",
    "Freelancer Invoicing and Payments",
    "Streamline Client Work",
    "Track Client Projects",
    "Client Collaboration for Freelancers",
    "Freelance Workflow Automation",
    "Client Portal for Freelancers",
    "Manage Client Feedback",
    "Task Management for Freelancers",
    "Freelancer Time Tracking",
    "Client Document Sharing",
    "Freelancer CRM Software",
    "Freelance Client Forms",
    "Manage Client Proposals",
    "Freelancer Billing and Contracts",
    "Collaborative Workspaces for Freelancers"
  ],
  creator: "Edgar Gago Carrillo",
  publisher: "gagocarrilloedgar",
  openGraph: {
    title: "BlueOS | The OS for client portals",
    description: "Delightfully simple client management for freelancers",
    url: "https://useblueos.com",
    siteName: "BlueOS | Client management",
    images: [
      {
        url: "https://useblueos.com/og-image.png",
        width: 1440,
        height: 832,
        alt: "Client management home"
      }
    ],
    locale: "en",
    type: "website"
  },
  // Twitter metadata
  twitter: {
    title: "BlueOS | The OS for client portals",
    description: "Delightfully simple client management for freelancers",
    creator: "@gagocarrilloedgar",
    images: ["https://useblueos.com/twitter-image.jpg"]
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
      <body>{children}</body>
      <Toaster richColors position="bottom-right" />
    </html>
  );
}
