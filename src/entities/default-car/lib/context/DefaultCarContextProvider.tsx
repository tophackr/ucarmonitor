'use client'

import {
    type PropsWithChildren,
    memo,
    useCallback,
    useEffect,
    useState
} from 'react'
import { useCars } from '@/entities/car/@x/default-car'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { DefaultCarContext } from './DefaultCarContext'

export const DefaultCarContextProvider = memo(
    function DefaultCarContextProvider({ children }: PropsWithChildren) {
        const router = useRouter()

        const [isInit, setIsInit] = useState(false)

        const { cars } = useCars()

        const initialize = useCallback(() => {
            setTimeout(() => {
                if (cars && !isInit) {
                    const defaultCar = cars.find(car => car.default)

                    setIsInit(true)

                    if (defaultCar) router.push(pagesRoute.carId(defaultCar.id))
                }
            }, 100)
        }, [cars, isInit, router])

        useEffect(initialize, [initialize])

        return (
            <DefaultCarContext.Provider value={{ isInit }}>
                {children}
            </DefaultCarContext.Provider>
        )
    }
)
