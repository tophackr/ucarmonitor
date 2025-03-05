import type { PropsWithChildren } from 'react'
import { CarContextProvider, type CarIdProps } from '@/entities/car'
import type { ParamsProps } from '@/shared/types'

export default function Layout({
    params,
    children
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    return <CarContextProvider params={params}>{children}</CarContextProvider>
}
