'use client'

import { List, Section } from '@telegram-apps/telegram-ui'
import { useMemo } from 'react'
import { CarCell, carsMock } from '@/entities/cars'

export function HomePage() {
    const renderCars = useMemo(
        () =>
            carsMock.map(car => (
                <CarCell
                    key={car.id}
                    car={car}
                />
            )),
        []
    )

    return (
        <>
            <List>
                <Section>{renderCars}</Section>
            </List>
        </>
    )
}
