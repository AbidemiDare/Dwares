import type { Metadata } from "next";
// import merriweather from "./ui/fonts";
import { Merriweather } from "@next/font/google";
import "./global.css";
import Navbar from "./components/Navbar/navbar";
import { CartProvider } from "./components/cart/cartContext";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Phone App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <div id="root">
          <CartProvider>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
