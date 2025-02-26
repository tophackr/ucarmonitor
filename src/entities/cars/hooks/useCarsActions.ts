import { useActions } from '@/shared/store'
import { carsSliceActions } from '../store/cars.slice'

export const useCarsActions = () => useActions(carsSliceActions)
