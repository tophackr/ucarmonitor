'use client'

import { List } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import {
    type CategoryProps,
    InteractionCategory,
    type InteractionProps
} from '@/entities/interaction'
import { ActionFormProvider } from './ActionFormProvider'
import { BaseSection } from './BaseSection'
import { DeleteInteractionButton } from './DeleteInteractionButton'
import { PartsSection } from './PartsSection'
import { RepairSection } from './RepairSection'
import { SaveActionButton } from './SaveActionButton'
import { FuelSection } from './fuel/FuelSection'
import { TiresSection } from './tires/TiresSection'

export function Form({
    category,
    interaction
}: CategoryProps & Partial<InteractionProps>) {
    const t = useTranslations('CarCategoryName')

    return (
        <List>
            <ActionFormProvider
                category={category}
                interaction={interaction}
            >
                <BaseSection title={t(category)} />

                {category === InteractionCategory.fuel && <FuelSection />}

                {[
                    InteractionCategory.maintenance,
                    InteractionCategory.repair
                ].includes(category) && <RepairSection />}

                {category === InteractionCategory.parts && <PartsSection />}

                {category === InteractionCategory.purchaseTires && (
                    <TiresSection />
                )}

                <SaveActionButton />
            </ActionFormProvider>

            {interaction && (
                <DeleteInteractionButton
                    carId={interaction.carId}
                    interactionId={interaction.id}
                />
            )}
        </List>
    )
}
