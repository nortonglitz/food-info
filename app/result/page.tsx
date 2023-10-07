'use client'
import { useEffect, useState } from 'react'
import { SearchResultProps, SearchResultFoodProps } from '@/types'
import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

interface ResultPageProps {
    params: {}
    searchParams: {
        q: string
    }
}

export default function ResultPage({ params, searchParams: { q } }: ResultPageProps) {

    const [result, setResult] = useState<SearchResultProps | null>(null)
    const [foods, setFoods] = useState<SearchResultFoodProps[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const router = useRouter()

    const getResult = async () => {
        setLoading(true)
        const resultData = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=MbXXiNA1G13Q2nqTd9mqLIJuQ3JL2mMTc5tEwzha', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                dataType: ['Branded'],
                query: q,
                pageSize: 20,
                pageNumber: page
            })
        })

        const data: SearchResultProps = await resultData.json()
        setResult(data)
        if (foods) {
            setFoods([...foods, ...data.foods])
        } else {
            setFoods([...data.foods])
        }
        setLoading(false)
    }

    useEffect(() => {
        getResult()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <main className="p-2 flex justify-center">
            <div className="container">
                <div className="flex justify-center">
                    <h1 className="flex items-center gap-1 ring-2 ring-neutral p-4 rounded my-4 w-fit">
                        You searched for: <span className="text-secondary">{q}</span>
                        <div className="flex tooltip" data-tip="Back">
                            <Link className="btn-xs ml-1 p-0" href="/">
                                <Undo2 />
                            </Link>
                        </div>
                    </h1>
                </div>
                {result && foods ?
                    <>
                        <p className="text-sm italic text-left mb-2">This search returned {result.totalHits} hits</p>
                        <div className="overflow-x-auto max-h-[60vh] ring-2 ring-neutral rounded">
                            <table className="table table-zebra table-pin-rows table-pin-cols">
                                <thead>
                                    <tr className="text-lg">
                                        <th>Brand Name</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foods.map(food =>
                                        <tr
                                            className="hover hover:cursor-pointer"
                                            onClick={() => router.push(`/food/${food.fdcId}`)}
                                            key={food.fdcId}
                                        >
                                            <td>{food.brandName || '-'}</td>
                                            <td>{food.description}</td>
                                            <td>{food.foodCategory || '-'}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="flex justify-center my-4">
                                <button
                                    className="btn normal-case text-lg btn-primary"
                                    onClick={() => setPage(page + 1)}
                                >
                                    {loading ?
                                        <span className="loading loading-ring loading-lg"></span>
                                        :
                                        'More results'
                                    }
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <div className="flex h-full align-middle justify-center">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                }
            </div>
        </main>
    )
}
