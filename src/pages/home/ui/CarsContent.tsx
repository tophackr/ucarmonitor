'use client'

import { type JSX, useCallback, useState } from 'react'
import { type SearchForm, SearchPage } from '@/features/search'
import { CarCell, type ICar, useCars, useCarsInitContext } from '@/entities/car'

export function CarsContent(): JSX.Element {
    const { isLoading } = useCarsInitContext()
    const { cars } = useCars()

    const [searchValue, setSearchValue] = useState('')

    const onFilter = useCallback(
        ({ brand, model }: ICar) => {
            const trimmedValue = searchValue.trim()

            if (!trimmedValue) return true

            const lowerValue = trimmedValue.toLowerCase()

            const carArr = [brand]

            if (model) carArr.push(model)

            const carName = carArr.join(' ').toLowerCase()

            return carName.includes(lowerValue)
        },
        [searchValue]
    )

    const onSearch = useCallback(
        ({ value }: SearchForm) => setSearchValue(value),
        []
    )

    return (
        <SearchPage
            items={cars}
            render={items =>
                items?.map(car => (
                    <CarCell
                        key={car.id}
                        car={car}
                    />
                ))
            }
            isLoading={isLoading}
            onFilter={onFilter}
            onSearch={onSearch}
        />
    )
}
