import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import About from "./about";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Play Hive'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
