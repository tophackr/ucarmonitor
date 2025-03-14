import { notFound } from 'next/navigation'
import type { JSX } from 'react'

export function CatchAllPage(): JSX.Element {
    notFound()
}
