'use client'

import { useContext } from 'react'
import { CarIdContext } from './CarIdContext'

export const useCarIdContext = () => useContext(CarIdContext)
