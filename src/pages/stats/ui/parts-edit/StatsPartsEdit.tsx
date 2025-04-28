'use client'

import { List } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { useCarContext } from '@/entities/car'
import { RepairField, useFindAllRepairsQuery } from '@/entities/repair'
import { PartsEditFormProvider } from './PartsEditFormProvider'
import { PartsEditSkeleton } from './PartsEditSkeleton'
import { PartsSaveButton } from './PartsSaveButton'

export function StatsPartsEdit(): JSX.Element {
    const { car } = useCarContext()
    const {
        data: repairs,
        isLoading,
        isError,
        error
    } = useFindAllRepairsQuery({ carId: car.id })

    if (isError) console.error('StatsPartsEdit', error)

    if (isLoading || !repairs) return <PartsEditSkeleton />

    return (
        <List>
            <PartsEditFormProvider repairs={repairs}>
                {repairs?.map(repair => (
                    <RepairField
                        key={repair.id}
                        repair={repair}
                    />
                ))}

                <PartsSaveButton />
            </PartsEditFormProvider>
        </List>
    )
}
