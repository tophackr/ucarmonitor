'use client'

import { useContext } from 'react'
import { CarContext } from '../CarContext'

export const useCarContext = () => useContext(CarContext)
