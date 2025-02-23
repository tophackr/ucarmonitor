class Pages {
    cars = '/'
    carNew = '/car/new'
    carId = (id: string) => `/car/${id}`

    settings = '/settings'
}

export const pagesRoute = new Pages()
