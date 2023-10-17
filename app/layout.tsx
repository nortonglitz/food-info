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
        <dialog open className="open:fixed open:mt-2 open:px-2 open:flex open:justify-center open:w-full open:bg-transparent top-20">
          <div className="flex justify-between px-4 py-3 items-center rounded bg-zinc-900/[0.7]">
            <div className="flex items-center text-gray-400 font-mono text-sm">
              <Image src="/github.svg" className="h-[30px] w-[30px] mr-2 bg-slate-400 rounded-full ring-2 ring-gray-400" alt="Github" width={65} height={65} />
              <div>
                You can find the source code in my Github&nbsp;<Link className="link" href="https://github.com/nortonglitz/food-info" target="_blank">repository</Link>.
              </div>
            </div>
            <form method="dialog" className="ml-4 mr-2">
              <button className="link-neutral text-gray-400 hover:text-gray-300 font-semibold transition-colors">
                X
              </button>
            </form>
          </div>
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
