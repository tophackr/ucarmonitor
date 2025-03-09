'use client'

import { List } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { type CategoryProps, InteractionCategory } from '@/entities/interaction'
import { BaseSection } from './BaseSection'
import { FuelSection } from './FuelSection'
import { InteractionEditButton } from './InteractionEditButton'
import { PartsSection } from './PartsSection'
import { RepairSection } from './RepairSection'
import { TiresSection } from './TiresSection'

export const Preview = memo(function Preview({ category }: CategoryProps) {
    const t = useTranslations('CarCategoryName')

    return (
        <List>
            <InteractionEditButton />

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
