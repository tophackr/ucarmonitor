'use client'

import { useContext } from 'react'
import { InteractionsInitContext } from '../InteractionsInitContext'

export const useInteractionsInitContext = () =>
    useContext(InteractionsInitContext)
