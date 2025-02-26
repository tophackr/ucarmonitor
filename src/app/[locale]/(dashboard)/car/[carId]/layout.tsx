import type { PropsWithChildren } from 'react'
import { CarIdContextProvider, type CarIdProps } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export default function Layout({
    params,
    children
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    return (
        <CarIdContextProvider params={params}>{children}</CarIdContextProvider>
    )
}
