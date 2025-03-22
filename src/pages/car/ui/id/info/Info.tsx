import { List } from '@telegram-apps/telegram-ui'
import dynamic from 'next/dynamic'
import { type JSX } from 'react'
import { PreviewButtons } from '@/features/preview-buttons'
import { CarPreview, useCarContext } from '@/entities/car'
import { CarEditButton } from './CarEditButton'

const DynamicInteractionList = dynamic(
    () => import('@/entities/interaction').then(mod => mod.InteractionList),
    { ssr: false }
)

export function Info(): JSX.Element {
    const { car, mileage } = useCarContext()

    return (
        <>
            <CarEditButton car={car} />

            <CarPreview
                car={car}
                mileage={mileage}
            />

            <List>
                <PreviewButtons />

                <DynamicInteractionList
                    car={car}
                    slice={10}
                />
            </List>
        </>
    )
}
