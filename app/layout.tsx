import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "vi_VN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-gold/20 to-transparent" />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-right" toastOptions={{ duration: 3200 }} />
        </div>
      </body>
    </html>
  );
}
