import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({subsets:['latin'],weight:['400','500','700','900']})
export const metadata: Metadata = {
  title: "Tinker",
  description: "Generated by create next app",
  icons:{
    icon:'/assets/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
