import { Badge, Cell } from '@telegram-apps/telegram-ui'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'
import type { CarProps } from '../types/CarProps'
import { CarAvatar } from './CarAvatar'

export function CarCell({ car }: CarProps) {
    const props = useButtonClick(pagesRoute.carId(car.id))

    return (
        <Cell
            after={car?.default && <Badge type={'number'}>Default</Badge>}
            before={
                <CarAvatar
                    name={car.brand}
                    size={28}
                />
            }
            subhead={car?.name || 'My Love Car'}
            subtitle={car?.model}
            {...props}
        >
            {car.brand}
        </Cell>
    )
}
