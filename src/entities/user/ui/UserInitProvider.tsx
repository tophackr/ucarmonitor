'use client'

import { type PropsWithChildren, useEffect, useState } from 'react'
import { useEffectOnce } from '@/shared/lib/dom'
import { Loader } from '@/shared/ui'
import { useLazyFindOneUserQuery } from '../api/userApi'

export function UserInitProvider({ children }: PropsWithChildren) {
    const [findUser, { isLoading }] = useLazyFindOneUserQuery()
    const [isFindLoading, setIsFindLoading] = useState(true)

    useEffectOnce(() => {
        findUser()
    })

    useEffect(() => {
        if (!isLoading) {
            setIsFindLoading(false)
        }
    }, [isLoading])

    if (isFindLoading) return <Loader />

    return children
}
