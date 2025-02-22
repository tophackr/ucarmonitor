import { Cell, Input, List, Section } from '@telegram-apps/telegram-ui'
import { Sigma } from 'lucide-react'
import { CarActionButtons } from '@/features/CarActionButtons'
import type { CarProps } from '@/entities/cars'
import { CarPreview } from '@/entities/cars'
import { IconCell, LinkCell, LucideIcon } from '@/shared/ui'
import { LabelsTemp } from './LabelsTemp'

export function CarWidget({ car }: CarProps) {
    return (
        <>
            <CarPreview car={car}>
                <LabelsTemp />
            </CarPreview>

            <List>
                <CarActionButtons />

                <Section footer={'footer'}>
                    <Cell>123</Cell>
                    <Input
                        type={'number'}
                        before={
                            <IconCell
                                Icon={<Sigma />}
                                bgColor={'OrangeRed'}
                            />
                        }
                    />
                    <LinkCell
                        href={'https://tophackr.com'}
                        Icon={<LucideIcon name={'Salad'} />}
                        bgColor={'mediumpurple'}
                    >
                        test
                    </LinkCell>
                </Section>
            </List>
        </>
    )
}
