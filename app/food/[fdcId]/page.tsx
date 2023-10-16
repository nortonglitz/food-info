import { SearchResultFoodProps } from '@/types'
import type { Metadata } from 'next'
import { camelCaseToWords } from '@/utils/text'

interface FoodPageProps {
    params: {
        fdcId: string
    }
}

export function generateMetadata({ params: { fdcId } }: FoodPageProps) {
    return {
        title: `Food #${fdcId}`
    }
}

export default async function FoodPage({ params: { fdcId } }: FoodPageProps) {

    const data = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=MbXXiNA1G13Q2nqTd9mqLIJuQ3JL2mMTc5tEwzha`)
    const food: SearchResultFoodProps = await data.json()

    return (
        <main className="flex justify-center p-6 md:p-8 lg:p-0 md:mt-10">
            <div className="container mt-4 flex justify-evenly flex-wrap gap-5">
                <div className="lg:max-w-prose">
                    <div className="flex flex-wrap">
                        <h1 className="text-3xl font-bold text-secondary">{food.brandName || 'N/A'}</h1>
                        <span className="text-slate-600 w-full">by {food.brandOwner || 'N/A'}</span>
                    </div>
                    <p className="italic text-xs mt-1">Published in {food.publicationDate}</p>
                    <p className="mt-2 text-sm text-justify"><b>Ingredients:</b> {food.ingredients.toLocaleLowerCase() || 'N/A'}</p>
                    <p className="mt-2 text-sm text-justify"><b>Category:</b> {food.brandedFoodCategory || 'N/A'}</p>
                </div>

                <div className="overflow-x-auto max-h-[60vh] ring-2 ring-neutral rounded mt-2 max-w-md p-2">
                    <table className="table table-zebra table-pin-rows table-pin-cols">
                        <caption className="text-xl font-medium">Nutrition Facts</caption>
                        <tbody>
                            <tr className="font-semibold text-base">
                                <td>Serving Size</td>
                                <td>100{food.servingSizeUnit}</td>
                            </tr>
                            {food.foodNutrients.map(nutrient =>
                                <tr key={nutrient.id}>
                                    <td>{nutrient.nutrient.name}</td>
                                    <td>{nutrient.amount}{nutrient.nutrient.unitName}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}