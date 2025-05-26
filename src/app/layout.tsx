import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { getTagList } from "@/lib/microcms";
import { LIMIT } from "@/constants";
import Header from "@/components/header";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";

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
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="mx-auto w-[720px] min-h-[85vh]">
          <Navigation tags={tags.contents} />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
