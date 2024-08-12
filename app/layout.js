import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "TikTok - Make your day",
  description: "Make your day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
