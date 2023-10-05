import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Roboto_Slab } from 'next/font/google'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Info',
  description: 'Gather food information of Agricultural Research Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <nav className="navbar bg-neutral text-neutral-content">
          <Link href="/" className="flex flex-col items-start ml-2">
            <span className="normal-case text-lg font-bold">FoodData</span>
            <span className="text-xs normal-case font-normal italic">Experimental App</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
