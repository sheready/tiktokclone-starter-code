import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TikTok",
  description: "Make your day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
