'use client'

import { useContext } from 'react'
import { EditValueContext } from '../lib/context/EditValueContext'

export const useEditValueContext = () => useContext(EditValueContext)
