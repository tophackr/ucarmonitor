'use client'

import { useContext } from 'react'
import { EditSetValueContext } from '../EditSetValueContext'

export const useEditSetValueContext = () => useContext(EditSetValueContext)
