'use client'

import { useState } from 'react'
import { useRouter } from '../i18n'

interface BaseDisabledReturns {
    disabled: boolean
}

interface UseButtonClickBaseReturns extends BaseDisabledReturns {
    onClick: () => void
}

interface UseButtonClickPromiseReturns extends BaseDisabledReturns {
    onClick: () => Promise<void>
}

interface UseButtonClickDataReturns<T> extends BaseDisabledReturns {
    onClick: (data: T) => void
}

interface UseButtonClickDataPromiseReturns<T> extends BaseDisabledReturns {
    onClick: (data: T) => Promise<void>
}

type UseButtonClickReturns<T> =
    | UseButtonClickBaseReturns
    | UseButtonClickPromiseReturns
    | UseButtonClickDataReturns<T>
    | UseButtonClickDataPromiseReturns<T>

type UseButtonClickProps<T> =
    | {
          route?: string
          callback?: (data?: T) => void | Promise<void>
      }
    | {
          route?: string
          callback?: (data: T) => void | Promise<void>
      }

export function useButtonClick<T>({
    route,
    callback
}: UseButtonClickProps<T>): UseButtonClickReturns<T> {
    const router = useRouter()

    const [disabled, setDisabled] = useState(false)

    const onClick = async (data: T) => {
        if (disabled) {
            return
        }

        setDisabled(true)

        if (callback) {
            await callback(data)
        }

        if (route) {
            router.push(route)
        }
    }

    return { disabled, onClick }
}
