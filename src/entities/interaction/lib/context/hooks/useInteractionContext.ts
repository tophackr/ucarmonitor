'use client'

import { useContext } from 'react'
import { InteractionContext } from '../InteractionContext'

export const useInteractionContext = () => useContext(InteractionContext)
