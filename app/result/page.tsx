'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SearchResultProps } from '@/types'
import { ArrowLeft, Pencil, Undo2 } from 'lucide-react'
import Link from 'next/link'

export default function ResultPage() {

    const page = 1
    const resultElements = 20

    const [result, setResult] = useState<SearchResultProps | null>(null)

    const searchParams = useSearchParams()
    const q = searchParams.get('q')

    const getResult = async () => {
        const resultData = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=MbXXiNA1G13Q2nqTd9mqLIJuQ3JL2mMTc5tEwzha', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: q,
                pageSize: resultElements,
                pageNumber: page
            })
        })

        const data: SearchResultProps = await resultData.json()
        setResult(data)
    }

    useEffect(() => {
        getResult()
    }, [])

    return (
        <main className="p-2 flex justify-center">
            <div className="container">
                <div className="flex justify-center">
                    <h1 className="flex items-center gap-1 ring-2 ring-neutral p-4 rounded my-4 w-fit">
                        You searched for: <span className="text-secondary">{q}</span>
                        <div className="flex tooltip" data-tip="Change search">
                            <Link className="btn-xs ml-1 p-0" href="/">
                                <Pencil />
                            </Link>
                        </div>
                    </h1>
                </div>
                {result ?
                    <div className="overflow-x-auto">
                        <p className="text-sm italic text-left">This search returned {result.totalHits} hits</p>
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.foods.map(food =>
                                    <tr key={food.fdcId} className="hover">
                                        <td>{food.description}</td>
                                        <td>{food.foodCategory}</td>
                                        <td>{food.score}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="flex h-full align-middle justify-center">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                }
            </div>
        </main>
    )
}
