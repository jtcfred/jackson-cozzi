import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar.js"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jackson Cozzi Portfolio',
  description: 'A website to showcase my projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-jackson-300">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
