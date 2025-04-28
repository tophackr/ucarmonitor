import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from './interceptors'
import { ApiTags } from './types/ApiTags'

export const backendApi = createApi({
    reducerPath: 'backend/api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: Object.values(ApiTags),
    endpoints: () => ({})
})
