import { array } from 'valibot'
import type { CarIdProps } from '@/entities/car/@x/part'
import {
    ApiTags,
    backendApi,
    invalidatesTagsToList,
    makeValidatedQueryFn,
    providesTagsToList
} from '@/shared/lib/store'
import { apiRoute } from '@/shared/routes'
import {
    type PartReqData,
    type PartResData,
    partReqSchema,
    partResSchema
} from '../model/PartDto'
import type { PartIdProps } from '../model/Props'

interface PartApiBody {
    body: PartReqData
}

export const partApi = backendApi
    .injectEndpoints({
        endpoints: build => ({
            createPart: build.mutation<PartResData, CarIdProps & PartApiBody>({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: partReqSchema,
                        resSchema: partResSchema
                    },
                    ({ carId, body }) => ({
                        url: apiRoute.part(carId),
                        method: 'POST',
                        body
                    })
                )
            }),
            findAllParts: build.query<PartResData[], CarIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: array(partResSchema) },
                    ({ carId }) => apiRoute.part(carId)
                )
            }),
            findOnePart: build.query<PartResData, CarIdProps & PartIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: partResSchema },
                    ({ carId, partId }) => apiRoute.partId(carId, partId)
                )
            }),
            updatePart: build.mutation<
                PartResData,
                CarIdProps & PartIdProps & PartApiBody
            >({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: partReqSchema,
                        resSchema: partResSchema
                    },
                    ({ carId, partId, body }) => ({
                        url: apiRoute.partId(carId, partId),
                        method: 'PATCH',
                        body
                    })
                )
            }),
            deletePart: build.mutation<PartResData, CarIdProps & PartIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: partResSchema },
                    ({ carId, partId }) => ({
                        url: apiRoute.partId(carId, partId),
                        method: 'DELETE'
                    })
                )
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            createPart: {
                invalidatesTags: () =>
                    invalidatesTagsToList({ tag: ApiTags.Part })
            },
            findAllParts: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Part, result })
            },
            findOnePart: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Part, result })
            },
            updatePart: {
                invalidatesTags: result =>
                    invalidatesTagsToList({ tag: ApiTags.Part, result })
            },
            deletePart: {
                invalidatesTags: () =>
                    invalidatesTagsToList({ tag: ApiTags.Part })
            }
        }
    })

export const {
    useCreatePartMutation,
    useFindAllPartsQuery,
    useFindOnePartQuery,
    useUpdatePartMutation,
    useDeletePartMutation
} = partApi
