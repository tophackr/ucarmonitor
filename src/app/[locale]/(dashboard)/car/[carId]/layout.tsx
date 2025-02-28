import type { PropsWithChildren } from 'react'
import { CarContextProvider, type CarIdProps } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export default function Layout({
    params,
    children
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    return <CarContextProvider params={params}>{children}</CarContextProvider>
}
