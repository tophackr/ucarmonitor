'use client'

import { useContext } from 'react'
import { EditValueContext } from '../context/EditValueContext'

export const useEditValueContext = () => useContext(EditValueContext)
