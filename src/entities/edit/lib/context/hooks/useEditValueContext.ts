'use client'

import { useContext } from 'react'
import { EditValueContext } from '../EditValueContext'

export const useEditValueContext = () => useContext(EditValueContext)
