'use client'

import { List } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import {
    type CategoryProps,
    InteractionCategory,
    type InteractionProps
} from '@/entities/interaction'
import { BaseSection } from './BaseSection'
import { DeleteInteractionButton } from './DeleteInteractionButton'
import { InteractionFormProvider } from './InteractionFormProvider'
import { PartsSection } from './PartsSection'
import { RepairSection } from './RepairSection'
import { SaveActionButton } from './SaveActionButton'
import { FuelSection } from './fuel/FuelSection'
import { WheelsSection } from './wheels/WheelsSection'

export const Form = memo(function Form({
    category,
    interaction
}: CategoryProps & Partial<InteractionProps>): JSX.Element {
    const t = useTranslations('CarCategoryName')

    return (
        <List>
            <InteractionFormProvider
                category={category}
                interaction={interaction}
            >
                <BaseSection title={t(category)} />

                {category === InteractionCategory.fuel && <FuelSection />}

                {[
                    InteractionCategory.maintenance,
                    InteractionCategory.repair
                ].includes(category) && <RepairSection />}

                {category === InteractionCategory.part && <PartsSection />}

                {category === InteractionCategory.purchase_wheels && (
                    <WheelsSection />
                )}

                <SaveActionButton />
            </InteractionFormProvider>

            {interaction && (
                <DeleteInteractionButton
                    carId={interaction.carId}
                    interactionId={interaction.id}
                />
            )}
        </List>
    )
})
