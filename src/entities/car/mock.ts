import { CarFuel, CarOdometerUnits, type ICar } from './model/Car'

export const cars: ICar[] = [
    {
        id: 'toyota',
        brand: 'Toyota',
        model: 'Camry',
        name: 'is my car',
        year: new Date(2020, 0, 1),
        fuel: CarFuel.Gasoline,
        mileage: 15000,
        odometerUnits: CarOdometerUnits.kilometers,
        engineHoursEnabled: true,
        engineHours: 200
    },
    {
        id: 'kia',
        brand: 'Kia',
        model: 'Ceed',
        year: new Date(2020, 0, 1),
        fuel: CarFuel.Gasoline,
        mileage: 15000,
        odometerUnits: CarOdometerUnits.kilometers,
        engineHoursEnabled: true,
        engineHours: 200
    },
    {
        id: 'tesla',
        brand: 'Tesla',
        model: 'Model 3',
        year: new Date(2021, 5, 1),
        fuel: CarFuel.Electric,
        mileage: 8000,
        odometerUnits: CarOdometerUnits.miles,
        engineHoursEnabled: false
    },
    {
        id: 'ford',
        brand: 'Ford',
        model: 'F-150',
        year: new Date(2019, 3, 1),
        fuel: CarFuel.Diesel,
        mileage: 30000,
        odometerUnits: CarOdometerUnits.kilometers,
        engineHoursEnabled: true,
        engineHours: 500
    },
    {
        id: 'honda',
        brand: 'Honda',
        model: 'Civic',
        default: true,
        year: new Date(2022, 1, 1),
        fuel: CarFuel.Hybrid,
        mileage: 5000,
        odometerUnits: CarOdometerUnits.miles,
        engineHoursEnabled: false
    },
    {
        id: 'chevrolet',
        brand: 'Chevrolet',
        model: 'Bolt',
        year: new Date(2021, 7, 1),
        fuel: CarFuel.Electric,
        mileage: 12000,
        odometerUnits: CarOdometerUnits.kilometers,
        engineHoursEnabled: true,
        engineHours: 150
    },
    {
        id: 'volkswagen',
        brand: 'Volkswagen',
        model: 'Golf',
        year: new Date(2018, 2, 1),
        fuel: CarFuel.Gas,
        mileage: 25000,
        odometerUnits: CarOdometerUnits.miles,
        engineHoursEnabled: true,
        engineHours: 300
    },
    {
        id: 'nissan',
        brand: 'Nissan',
        model: 'Rogue',
        year: new Date(2020, 4, 1),
        fuel: CarFuel.Gasoline,
        mileage: 18000,
        odometerUnits: CarOdometerUnits.kilometers,
        engineHoursEnabled: false
    },
    {
        id: 'bmw',
        brand: 'BMW',
        model: 'X5',
        year: new Date(2019, 8, 1),
        fuel: CarFuel.Diesel,
        mileage: 22000,
        odometerUnits: CarOdometerUnits.miles,
        engineHoursEnabled: true,
        engineHours: 400
    }
]
