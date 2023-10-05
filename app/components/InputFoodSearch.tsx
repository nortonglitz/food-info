'use client'

import { FormEventHandler, useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const InputFoodSearch = () => {

    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault()
        if (query.length >= 3) {
            router.push(`/result?q=${query}`)
        }
    }

    return (
        <form className="join" onSubmit={handleSearch}>
            <input
                autoFocus
                type="text"
                placeholder="Search"
                className="input input-bordered w-full max-w-xs join-item"
                onChange={e => setQuery(e.target.value)}
            />
            <button className='btn join-item' type="submit">
                <Search />
            </button>
        </form>
    )
}

export default InputFoodSearch