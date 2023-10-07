import InputFoodSearch from '@/components/InputFoodSearch'
import Image from 'next/image'
import Link from 'next/link'

const Technology = ({ name, dir }: { name: string, dir: string }) =>
  <div className="flex flex-col items-center">
    <Image src={dir} className="m-2 mx-10 h-auto" alt="NextJS" height={50} width={65} />
    <p>{name}</p>
  </div>


export default function HomePage() {

  return (
    <main className="p-2 flex flex-col items-center">
      <div className="flex flex-col items-center container mt-[22vh]">
        <h1 className="xs:text-xs md:text-lg text-center mb-2">Look for the food that most suit your needs</h1>
        <InputFoodSearch />
      </div>
      <div className="divider mt-[35vh]" />
      <p className="italic">This app was created as a showcase, using an external API provided by <Link className="link" href="https://www.usda.gov/">U.S. DEPARTMENT OF AGRICULTURE</Link>, using the technlogies listed below.</p>
      <div className="flex justify-around items-baseline flex-nowrap overflow-x-auto w-full mt-2">
        <Link href="https://nextjs.org/" target="_blank">
          <Technology name="NextJS" dir="/next.svg" />
        </Link>
        <Link href="https://git-scm.com/" target="_blank">
          <Technology name="Git" dir="/git.svg" />
        </Link>
        <Link href="https://github.com/">
          <Technology name="Github" dir="/github.svg" />
        </Link>
        <Link href="https://react.dev/">
          <Technology name="React" dir="/react.svg" />
        </Link>
        <Link href="https://tailwindcss.com/">
          <Technology name="TailwindCSS" dir="/tailwindcss.svg" />
        </Link>
        <Link href="https://www.typescriptlang.org/">
          <Technology name="TypeScript" dir="/typescript.svg" />
        </Link>
      </div>
    </main>
  )
}
