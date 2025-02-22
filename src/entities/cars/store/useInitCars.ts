import { useClientOnce } from '@/shared/hooks'
import { getCars } from './cars'
import { useCars } from './useCars'

export function useInitCars() {
    const { setCars } = useCars()

    useClientOnce(() => getCars().then(setCars))
}
