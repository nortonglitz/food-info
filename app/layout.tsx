import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Roboto_Slab } from 'next/font/google'
import Image from 'next/image'

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
        <dialog open className="open:relative open:w-full open:flex open:justify-between open:px-4 open:py-2">
          <div className="flex items-center text-gray-400 font-mono text-sm">
            <Image src="/github.svg" className="h-[30px] w-[30px] mr-2 bg-slate-400 rounded-full ring-2 ring-gray-400" alt="Github" width={65} height={65} />
            You can find the source code in my&nbsp;<Link className="link" href="https://github.com/nortonglitz/food-info" target="_blank">Github repository</Link>.
          </div>
          <form method="dialog">
            <button className="link-neutral text-gray-400 hover:text-gray-300 mr-10 font-semibold transition-colors">
              X
            </button>
          </form>
        </dialog>
        <nav className="navbar bg-neutral text-neutral-content">
          <Link href="/" className="flex flex-col items-start ml-2">
            <span className="normal-case text-lg font-bold">FoodInfo</span>
            <span className="text-xs normal-case font-normal italic">Experimental App</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
