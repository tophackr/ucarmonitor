import { useActions } from '@/shared/store'
import { carsSliceActions } from './cars.slice'

export const useCarsActions = () => useActions(carsSliceActions)
