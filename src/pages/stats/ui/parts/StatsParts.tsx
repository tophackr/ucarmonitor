'use client'

import { List } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { useCarContext } from '@/entities/car'
import { useSortedInteractions } from '@/entities/interaction'
import { RepairCell, useRepairs } from '@/entities/repair'
import { EditPartsButton } from './EditPartsButton'

export function StatsParts(): JSX.Element {
    const { car } = useCarContext()

    const sortedInteractions = useSortedInteractions({ carId: car.id })

    const { repairs } = useRepairs()

    return (
        <>
            <EditPartsButton car={car} />

            <List>
                {repairs
                    .filter(repair => repair.isVisible)
                    .map(repair => (
                        <RepairCell
                            key={repair.option}
                            repair={repair}
                            interactions={sortedInteractions}
                        />
                    ))}
            </List>
        </>
    )
}
