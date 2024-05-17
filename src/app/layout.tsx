import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import info from "../../mis-links.json";
const {title,description} = info.basics;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: title,
  description:description,
  openGraph:{
    type: "website",
    url: "https://example.com",
    title: title,
    description: "My Website Description",
    siteName: "My Website",
    images: [{
      url: "https://example.com/og.png",
    }],
  },
  authors:[
    {
      name:"Sbleit",
      url:"https://sbleit.net"
    }
  ],
  icons:{
    icon:"/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
