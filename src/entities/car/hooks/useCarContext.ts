'use client'

import { useContext } from 'react'
import { CarContext } from '../lib/context/CarContext'

export const useCarContext = () => useContext(CarContext)
