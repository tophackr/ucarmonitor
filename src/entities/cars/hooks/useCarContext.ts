'use client'

import { useContext } from 'react'
import { CarContext } from '../context/CarContext'

export const useCarContext = () => useContext(CarContext)
