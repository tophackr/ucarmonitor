'use client'

import { useContext } from 'react'
import { DefaultCarContext } from '../DefaultCarContext'

export const useDefaultCarContext = () => useContext(DefaultCarContext)
