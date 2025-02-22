'use client'

import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { rootActions } from '../root-actions'
import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
