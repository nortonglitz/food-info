import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Search Result'
}

export default function ResultLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}