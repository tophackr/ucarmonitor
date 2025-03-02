import { List } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import { type CategoryProps, InteractionCategory } from '@/entities/interaction'
import { ActionFormProvider } from './ActionFormProvider'
import { BaseSection } from './BaseSection'
import { PartsSection } from './PartsSection'
import { RepairSection } from './RepairSection'
import { SaveActionButton } from './SaveActionButton'
import { FuelSection } from './fuel/FuelSection'
import { TiresSection } from './tires/TiresSection'

export async function Form({ category }: CategoryProps) {
    const t = await getTranslations('CarCategoryName')

    return (
        <List>
            <ActionFormProvider category={category}>
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
        </List>
    )
}
