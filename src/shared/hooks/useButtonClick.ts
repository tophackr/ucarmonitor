'use client'

import { type MouseEvent, useCallback, useState } from 'react'
import { useRouter } from '../i18n'
import type { MouseClickEvent } from '../types'

type UseButtonClickProps<T> =
    | {
          route?: string
          callback?: (data?: T) => void | Promise<void>
      }
    | {
          route?: string
          callback?: (data: T) => void | Promise<void>
      }

export function useButtonClick<T = MouseEvent>({
    route,
    callback
}: UseButtonClickProps<T>): MouseClickEvent<T> {
    const router = useRouter()

    const [disabled, setDisabled] = useState(false)

    const onClick = useCallback(
        async (data?: T) => {
            if (disabled) {
                return
            }

            setDisabled(true)

            if (callback) {
                await callback(data as T)
            }

            if (route) {
                router.push(route)
            }
        },
        [callback, disabled, route, router]
    )

    return { disabled, onClick }
}
