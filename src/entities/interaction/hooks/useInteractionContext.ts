'use client'

import { useContext } from 'react'
import { InteractionContext } from '../context/InteractionContext'

export const useInteractionContext = () => useContext(InteractionContext)
