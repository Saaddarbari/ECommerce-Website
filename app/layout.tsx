import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import { CartProvider } from "./Cart/context/CartContext";
config.autoAddCss = false


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Furniro Ecommerce",
  description: "Created by Saad Darbari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
            <Navbar />
              {children}
            <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
