import type { JSX } from 'react'
import { InfoForm } from '@/features/info-form'
import { BackButton } from '@/shared/ui/tma'

export function CarNewPage(): JSX.Element {
    return (
        <>
            <BackButton />

            <InfoForm />
        </>
    )
}
