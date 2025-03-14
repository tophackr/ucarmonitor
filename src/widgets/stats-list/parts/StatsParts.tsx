'use client'

import { Cell, List, Progress, Section } from '@telegram-apps/telegram-ui'
import { useMessages, useTranslations } from 'next-intl'
import { useCarContext } from '@/entities/car'
import type { Translation } from '@/shared/i18n'

export function StatsParts() {
    const t = useTranslations('CarActionForm')

    const { mileage } = useCarContext()

    const messages = useMessages() as unknown as Translation
    const repairOptionsKeys = Object.keys(
        messages.CarActionForm.repair_work.options
    ) as unknown as (keyof Translation['CarActionForm']['repair_work']['options'])[]

    return (
        <List>
            {repairOptionsKeys.map((key, index) => (
                <Section key={index}>
                    <Cell
                        subtitle={'Каждые 100 км'}
                        description={
                            <Progress
                                value={37}
                                className={'mt-2'}
                            />
                        }
                        after={`${mileage} км`}
                    >
                        {t(`repair_work.options.${key}`)}
                    </Cell>
                </Section>
            ))}
        </List>
    )
}
