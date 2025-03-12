import { Button } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useCarContext } from '@/entities/car'
import { InteractionCategory, actionsRoute } from '@/entities/interaction'
import { useButtonClick } from '@/shared/lib/dom'

export function MileageButton() {
    const t = useTranslations('CarActionButtons')
    const { car } = useCarContext()

    const props = useButtonClick({
        route: actionsRoute(car.id).new(InteractionCategory.mileage)
    })

    return (
        <Button
            mode={'bezeled'}
            className={'col-span-3'}
            {...props}
        >
            {t('add')}
        </Button>
    )
}
