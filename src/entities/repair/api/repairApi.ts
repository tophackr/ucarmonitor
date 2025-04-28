import { array } from 'valibot'
import type { CarIdProps } from '@/entities/car/@x/repair'
import {
    ApiTags,
    backendApi,
    invalidatesTagsToList,
    makeValidatedQueryFn,
    providesTagsToList
} from '@/shared/lib/store'
import { apiRoute } from '@/shared/routes'
import {
    type CommonRepairResData,
    commonRepairResSchema
} from '../model/CommonRepairDto'
import type { RepairIdProps } from '../model/Props'
import {
    type RepairReqData,
    type RepairResData,
    repairReqSchema,
    repairResSchema
} from '../model/RepairDto'

interface RepairApiBody {
    body: RepairReqData
}

interface ManyRepairApiBody {
    body: RepairReqData[]
}

export const repairApi = backendApi
    .injectEndpoints({
        endpoints: build => ({
            createRepair: build.mutation<
                RepairResData,
                CarIdProps & RepairApiBody
            >({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: repairReqSchema,
                        resSchema: repairResSchema
                    },
                    ({ carId, body }) => ({
                        url: apiRoute.repair(carId),
                        method: 'POST',
                        body
                    })
                )
            }),
            findAllRepairs: build.query<CommonRepairResData[], CarIdProps>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: array(commonRepairResSchema) },
                    ({ carId }) => apiRoute.repair(carId)
                )
            }),
            findOneRepair: build.query<
                RepairResData,
                CarIdProps & RepairIdProps
            >({
                queryFn: makeValidatedQueryFn(
                    { resSchema: repairResSchema },
                    ({ carId, repairId }) => apiRoute.repairId(carId, repairId)
                )
            }),
            updateRepair: build.mutation<
                RepairResData,
                CarIdProps & RepairIdProps & RepairApiBody
            >({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: repairReqSchema,
                        resSchema: repairResSchema
                    },
                    ({ carId, repairId, body }) => ({
                        url: apiRoute.repairId(carId, repairId),
                        method: 'PATCH',
                        body
                    })
                )
            }),
            updateManyRepair: build.mutation<
                RepairResData[],
                CarIdProps & ManyRepairApiBody
            >({
                queryFn: makeValidatedQueryFn(
                    {
                        reqSchema: array(repairReqSchema),
                        resSchema: array(repairResSchema)
                    },
                    ({ carId, body }) => ({
                        url: apiRoute.repair(carId),
                        method: 'PATCH',
                        body
                    })
                )
            }),
            deleteRepair: build.mutation<
                RepairResData,
                CarIdProps & RepairIdProps
            >({
                queryFn: makeValidatedQueryFn(
                    { resSchema: repairResSchema },
                    ({ carId, repairId }) => ({
                        url: apiRoute.repairId(carId, repairId),
                        method: 'DELETE'
                    })
                )
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            createRepair: {
                invalidatesTags: () =>
                    invalidatesTagsToList({
                        tag: ApiTags.Repair,
                        depsTags: [ApiTags.Interaction]
                    })
            },
            findAllRepairs: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Repair, result })
            },
            findOneRepair: {
                providesTags: result =>
                    providesTagsToList({ tag: ApiTags.Repair, result })
            },
            updateRepair: {
                invalidatesTags: result =>
                    invalidatesTagsToList({
                        tag: ApiTags.Repair,
                        result,
                        depsTags: [ApiTags.Interaction]
                    })
            },
            deleteRepair: {
                invalidatesTags: () =>
                    invalidatesTagsToList({
                        tag: ApiTags.Repair,
                        depsTags: [ApiTags.Interaction]
                    })
            }
        }
    })

export const {
    useCreateRepairMutation,
    useFindAllRepairsQuery,
    useFindOneRepairQuery,
    useUpdateRepairMutation,
    useUpdateManyRepairMutation,
    useDeleteRepairMutation
} = repairApi
