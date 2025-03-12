'use client'

import { useContext } from 'react'
import { CarsInitContext } from '../CarsInitContext'

export const useCarsInitContext = () => useContext(CarsInitContext)
