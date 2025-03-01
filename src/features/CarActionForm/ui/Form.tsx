import { List } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import { CarActionCategory, type CarCategoryProps } from '@/entities/cars'
import { ActionFormProvider } from './ActionFormProvider'
import { BaseSection } from './base/BaseSection'
import { FuelSection } from './fuel/FuelSection'
import { PartsSection } from './parts/PartsSection'
import { RepairSection } from './repair/RepairSection'
import { TiresSection } from './tires/TiresSection'

export async function Form({ category }: CarCategoryProps) {
    const t = await getTranslations('CarCategoryName')

    return (
        <List>
            <ActionFormProvider category={category}>
                <BaseSection title={t(category)} />

                {category === CarActionCategory.fuel && <FuelSection />}

                {[
                    CarActionCategory.maintenance,
                    CarActionCategory.repair
                ].includes(category) && <RepairSection />}

                {category === CarActionCategory.parts && <PartsSection />}

                {category === CarActionCategory.purchaseTires && (
                    <TiresSection />
                )}
            </ActionFormProvider>
        </List>
    )
}
