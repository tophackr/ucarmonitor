import { ApiTags, backendApi, makeValidatedQueryFn } from '@/shared/lib/store'
import { apiRoute } from '@/shared/routes'
import {
    type UserReqData,
    type UserResData,
    userReqSchema,
    userResSchema
} from '../model/UserDto'

interface UserApiBody {
    body: UserReqData
}

export const userApi = backendApi
    .injectEndpoints({
        endpoints: build => ({
            findOneUser: build.query<UserResData, void>({
                queryFn: makeValidatedQueryFn(
                    { resSchema: userResSchema },
                    () => apiRoute.me
                )
            }),
            updateUser: build.mutation<UserResData, UserApiBody>({
                queryFn: makeValidatedQueryFn(
                    { reqSchema: userReqSchema, resSchema: userResSchema },
                    ({ body }) => ({
                        url: apiRoute.me,
                        method: 'PATCH',
                        body
                    })
                )
            })
        })
    })
    .enhanceEndpoints({
        endpoints: {
            findOneUser: {
                providesTags: [ApiTags.User]
            },
            updateUser: {
                invalidatesTags: [ApiTags.User]
            }
        }
    })

export const { useLazyFindOneUserQuery, useUpdateUserMutation } = userApi
