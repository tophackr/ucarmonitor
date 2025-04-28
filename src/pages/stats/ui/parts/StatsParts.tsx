'use client'

import { List } from '@telegram-apps/telegram-ui'
import { type JSX, useMemo } from 'react'
import { useCarContext } from '@/entities/car'
import { RepairCell, useFindAllRepairsQuery } from '@/entities/repair'
import { EditPartsButton } from './EditPartsButton'
import { PartsSkeleton } from './PartsSkeleton'

export function StatsParts(): JSX.Element {
    const { car } = useCarContext()

    const {
        data: repairs,
        isLoading,
        isError,
        error
    } = useFindAllRepairsQuery({ carId: car.id })

    if (isError) console.error('StatsParts', error)

    const filteredRepair = useMemo(
        () =>
            repairs
                ?.filter(repair => repair.isVisible)
                ?.sort((a, b) => {
                    if (a.interaction === null && b.interaction === null)
                        return 0
                    if (a.interaction === null) return 1
                    if (b.interaction === null) return -1
                    return (
                        (a.interaction.mileage ?? 0) -
                        (b.interaction.mileage ?? 0)
                    )
                }),
        [repairs]
    )

    if (isLoading) return <PartsSkeleton />

    // todo: if not visible

    return (
        <>
            <EditPartsButton car={car} />

            <List>
                {filteredRepair?.map(repair => (
                    <RepairCell
                        key={repair.option}
                        commonRepair={repair}
                    />
                ))}
            </List>
        </>
    )
}
