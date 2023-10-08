import InputFoodSearch from '@/components/InputFoodSearch'
import Image from 'next/image'
import Link from 'next/link'

const Technology = ({ name, dir }: { name: string, dir: string, href: string }) =>
  <Link href="https://nextjs.org/" target="_blank" className="p-2">
    <div className="flex flex-col items-center">
      <Image src={dir} className="m-2 mx-10 h-[65px] w-[65px]" alt={name} width={65} height={65} />
      <p>{name}</p>
    </div>
  </Link>


export default function HomePage() {

  return (
    <main className="p-2 flex flex-col items-center">
      <div className="flex flex-col items-center container mt-[22vh]">
        <h1 className="xs:text-xs md:text-lg text-center mb-2">Look for the food that most suit your needs</h1>
        <InputFoodSearch />
      </div>
      <div className="divider mt-[35vh]" />
      <p className="italic text-sm text-center">This app was created as a showcase, using an external API provided by <Link className="link" target="_blank" href="https://www.usda.gov/">U.S. DEPARTMENT OF AGRICULTURE</Link>, and technologies listed below.</p>
      <div className="flex justify-around items-baseline flex-wrap overflow-x-auto w-full gap-2">
        <Technology name="NextJS" dir="/next.svg" href="https://nextjs.org/" />
        <Technology name="Git" dir="/git.svg" href="https://git-scm.com/" />
        <Technology name="Github" dir="/github.svg" href="https://github.com/" />
        <Technology name="React" dir="/react.svg" href="https://react.dev/" />
        <Technology name="TailwindCSS" dir="/tailwindcss.svg" href="https://tailwindcss.com/" />
        <Technology name="TypeScript" dir="/typescript.svg" href="https://www.typescriptlang.org/" />
      </div>
    </main>
  )
}
