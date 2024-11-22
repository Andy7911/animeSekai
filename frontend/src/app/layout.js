import localFont from "next/font/local";
import "../styles/vars.scss";
import { Suspense } from "react";

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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
       
      >
        <Suspense fallback={<div>Loading ...</div>}/>
        {children}
      </body>
    </html>
  );
}
