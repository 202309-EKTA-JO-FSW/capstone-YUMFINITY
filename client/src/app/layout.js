import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UserContextProvider from "./utils/contextProvider";

const roboto = Roboto({
  weight: ["400", "300"],
  style: ["normal"],
  subsets: ["latin"],
});
const Boston = localFont({
  src: "./Fonts/Boston Rough.otf",
  variable: "--font-boston",
});

export const metadata = {
  title: "YUMFINITY",
  description: "Order Eat Repeat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Boston.variable} ${roboto.className}`}>
        <UserContextProvider getCookie={getCookie}>
          <Navbar />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
