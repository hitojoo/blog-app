import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { getTagList, getWriter } from "@/lib/microcms";
import { LIMIT } from "@/constants";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: {
    template: "%s | Simple Blog",
    default: "Simple Blog",
  },
  description: "A simple blog presented by microCMS",
  openGraph: {
    title: {
      template: "%s | Simple Blog",
      default: "Simple Blog",
    },
    description: "A simple blog presented by microCMS",
    images: "/ogp.png",
  },
  alternates: {
    canonical: "/",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  const writers = await getWriter();
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="ml-4 my-2">
          <DynamicBreadcrumb />
        </div>
        <div className="mx-auto min-h-[85vh] flex gap-12 mt-12 justify-center">
          <main className="w-[720px]">{children}</main>
          <Sidebar writer={writers.contents[0]} tags={tags.contents} />
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
