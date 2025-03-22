import type { JSX, PropsWithChildren } from 'react'
import { CarContextProvider, type CarIdProps } from '@/entities/car'
import { InteractionsInitContextProvider } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/lib/dom'

export function CarIdLayout({
    children,
    params
}: PropsWithChildren<ParamsProps<CarIdProps>>): JSX.Element {
    return (
        <CarContextProvider params={params}>
            <InteractionsInitContextProvider>
                {children}
            </InteractionsInitContextProvider>
        </CarContextProvider>
    )
}
