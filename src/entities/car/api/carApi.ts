import { array } from 'valibot'
import {
    ApiTags,
    backendApi,
    invalidatesTagsToList,
    makeValidatedQueryFn,
    providesTagsToList
} from '@/shared/lib/store'
import { apiRoute } from '@/shared/routes'
import {
    type CarReqData,
    type CarResData,
    carReqSchema,
    carResSchema
} from '../model/CarDto'
import type { CarIdProps } from '../model/Props'

interface CarApiBody {
    body: CarReqData
}

export const carApi = backendApi
    .injectEndpoints({
        endpoints: build => ({
            createCar: build.mutation<CarResData, CarApiBody>({
                queryFn: makeValidatedQueryFn(
                    { reqSchema: carReqSchema, resSchema: carResSchema },
                    ({ body }) => ({
                        url: apiRoute.car,
                        method: 'POST',
                        body
                    })
                )
            }),
            findAllCars: build.query<CarResData[], void>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: array(carResSchema) },
                    () => apiRoute.car
                )
            }),
            findOneCar: build.query<CarResData, CarIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: carResSchema },
                    ({ carId }) => apiRoute.carId(carId)
                )
            }),
            updateCar: build.mutation<CarResData, CarIdProps & CarApiBody>({
                queryFn: makeValidatedQueryFn(
                    { reqSchema: carReqSchema, resSchema: carResSchema },
                    ({ carId, body }) => ({
                        url: apiRoute.carId(carId),
                        method: 'PATCH',
                        body
                    })
                )
            }),
            deleteCar: build.mutation<CarResData, CarIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: carResSchema },
                    ({ carId }) => ({
                        url: apiRoute.carId(carId),
                        method: 'DELETE'
                    })
                )
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            createCar: {
                invalidatesTags: () =>
                    invalidatesTagsToList({ tag: ApiTags.Car })
            },
            findAllCars: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Car, result })
            },
            findOneCar: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Car, result })
            },
            updateCar: {
                invalidatesTags: result =>
                    invalidatesTagsToList({ tag: ApiTags.Car, result })
            },
            deleteCar: {
                invalidatesTags: () =>
                    invalidatesTagsToList({ tag: ApiTags.Car })
            }
        }
    })

export const {
    useCreateCarMutation,
    useFindAllCarsQuery,
    useFindOneCarQuery,
    useUpdateCarMutation,
    useDeleteCarMutation
} = carApi
