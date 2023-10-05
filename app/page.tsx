import InputFoodSearch from '@/components/InputFoodSearch'

export default function HomePage() {

  return (
    <main className="p-2 flex justify-center">
      <div className="flex flex-col items-center container mt-36">
        <h1 className="xs:text-xs md:text-lg text-center mb-2">Look for the food that most suit your needs</h1>
        <InputFoodSearch />
      </div>
    </main>
  )
}
