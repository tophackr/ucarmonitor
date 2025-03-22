'use client'

import { List } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { RepairField, useRepairs } from '@/entities/repair'
import { PartsEditFormProvider } from './PartsEditFormProvider'
import { PartsSaveButton } from './PartsSaveButton'

export function StatsPartsEdit(): JSX.Element {
    const { repairs } = useRepairs()

    return (
        <List>
            <PartsEditFormProvider repairs={repairs}>
                {repairs.map(repair => (
                    <RepairField
                        key={repair.option}
                        repair={repair}
                    />
                ))}

                <PartsSaveButton />
            </PartsEditFormProvider>
        </List>
    )
}
