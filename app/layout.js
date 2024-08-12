import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "TikTok - Make your day",
  description: "Make your day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
      </head>
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">   
          {children}
        </main>
      </body>
    </html>
  );
}
