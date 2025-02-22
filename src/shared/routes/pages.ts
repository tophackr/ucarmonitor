class Pages {
    cars = '/'
    carId = (id: string) => `/car/${id}`

    settings = '/settings'
}

export const pagesRoute = new Pages()
