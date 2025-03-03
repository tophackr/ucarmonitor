'use client'

import { useContext } from 'react'
import { EditSetValueContext } from '../context/EditSetValueContext'

export const useEditSetValueContext = () => useContext(EditSetValueContext)
