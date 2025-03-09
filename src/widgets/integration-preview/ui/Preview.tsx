'use client'

import { List } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { type CategoryProps, InteractionCategory } from '@/entities/interaction'
import { BaseSection } from './BaseSection'
import { FuelSection } from './FuelSection'
import { PartsSection } from './PartsSection'
import { RepairSection } from './RepairSection'
import { TiresSection } from './TiresSection'
import { useInteractionEditButton } from './hooks/useInteractionEditButton'

export const Preview = memo(function Preview({ category }: CategoryProps) {
    const t = useTranslations('CarCategoryName')

    useInteractionEditButton()

    return (
        <List>
            <BaseSection title={t(category)} />

            {category === InteractionCategory.fuel && <FuelSection />}

            {[
                InteractionCategory.maintenance,
                InteractionCategory.repair
            ].includes(category) && <RepairSection />}

            {category === InteractionCategory.parts && <PartsSection />}

            {category === InteractionCategory.purchaseTires && <TiresSection />}
        </List>
    )
})
