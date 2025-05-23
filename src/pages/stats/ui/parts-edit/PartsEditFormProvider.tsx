'use client'

import { type JSX, type PropsWithChildren, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import type { RepairsProps } from '@/entities/repair'

export const PartsEditFormProvider = memo(function PartsEditFormProvider({
    repairs,
    children
}: PropsWithChildren<RepairsProps>): JSX.Element {
    const methods = useForm<RepairsProps>({
        defaultValues: { repairs }
    })

    return <FormProvider {...methods}>{children}</FormProvider>
})
