import { array } from 'valibot'
import type { CarIdProps } from '@/entities/car/@x/interaction'
import {
    ApiTags,
    backendApi,
    invalidatesTagsToList,
    makeValidatedQueryFn,
    providesTagsToList
} from '@/shared/lib/store'
import { apiRoute } from '@/shared/routes'
import {
    type InteractionReqData,
    type InteractionResData,
    interactionReqSchema,
    interactionResSchema
} from '../model/InteractionDto'
import type { InteractionIdProps } from '../model/Props'

interface InteractionApiBody {
    body: InteractionReqData
}

export const interactionApi = backendApi
    .injectEndpoints({
        endpoints: build => ({
            createInteraction: build.mutation<
                InteractionResData,
                CarIdProps & InteractionApiBody
            >({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: interactionReqSchema,
                        resSchema: interactionResSchema
                    },
                    ({ carId, body }) => ({
                        url: apiRoute.interaction(carId),
                        method: 'POST',
                        body
                    })
                )
            }),
            findAllInteractions: build.query<InteractionResData[], CarIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: array(interactionResSchema) },
                    ({ carId }) => apiRoute.interaction(carId)
                )
            }),
            findOneInteraction: build.query<
                InteractionResData,
                CarIdProps & InteractionIdProps
            >({
                queryFn: makeValidatedQueryFn(
                    { resSchema: interactionResSchema },
                    ({ carId, interactionId }) =>
                        apiRoute.interactionId(carId, interactionId)
                )
            }),
            updateInteraction: build.mutation<
                InteractionResData,
                CarIdProps & InteractionIdProps & InteractionApiBody
            >({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: interactionReqSchema,
                        resSchema: interactionResSchema
                    },
                    ({ carId, interactionId, body }) => ({
                        url: apiRoute.interactionId(carId, interactionId),
                        method: 'PATCH',
                        body
                    })
                )
            }),
            deleteInteraction: build.mutation<
                InteractionResData,
                CarIdProps & InteractionIdProps
            >({
                queryFn: makeValidatedQueryFn(
                    { resSchema: interactionResSchema },
                    ({ carId, interactionId }) => ({
                        url: apiRoute.interactionId(carId, interactionId),
                        method: 'DELETE'
                    })
                )
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            createInteraction: {
                invalidatesTags: () =>
                    invalidatesTagsToList({
                        tag: ApiTags.Interaction
                    })
            },
            findAllInteractions: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Interaction, result })
            },
            findOneInteraction: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Interaction, result })
            },
            updateInteraction: {
                invalidatesTags: result =>
                    invalidatesTagsToList({
                        tag: ApiTags.Interaction,
                        result
                    })
            },
            deleteInteraction: {
                invalidatesTags: () =>
                    invalidatesTagsToList({
                        tag: ApiTags.Interaction
                    })
            }
        }
    })

export const {
    useCreateInteractionMutation,
    useFindAllInteractionsQuery,
    useFindOneInteractionQuery,
    useUpdateInteractionMutation,
    useDeleteInteractionMutation
} = interactionApi
