'use client'

import { useContext } from 'react'
import { EditSetValueContext } from '../lib/context/EditSetValueContext'

export const useEditSetValueContext = () => useContext(EditSetValueContext)
