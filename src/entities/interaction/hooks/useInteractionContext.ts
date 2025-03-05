'use client'

import { useContext } from 'react'
import { InteractionContext } from '../lib/context/InteractionContext'

export const useInteractionContext = () => useContext(InteractionContext)
