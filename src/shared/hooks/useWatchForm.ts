'use client'

import { useEffect } from 'react'
import type { FieldValues, UseFormWatch } from 'react-hook-form'

interface UseWatchFormProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    callback: (formData: T) => void
}

export function useWatchForm<T extends FieldValues>({
    watch,
    callback
}: UseWatchFormProps<T>) {
    return useEffect(() => {
        const { unsubscribe } = watch(formData => callback(formData as T))

        return () => {
            unsubscribe()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback])
}
