'use client'

import { useMemo } from 'react'
import { hasReactNode } from '@/shared/utils'
import type { SearchPageProps } from '../model/Search'
import { Loading } from './Loading'
import { NotFound } from './NotFound'
import { Nothing } from './Nothing'
import { Search } from './Search'

export function SearchPage<T>({
    items,
    render,
    isLoading,
    onFilter,
    nothing,
    nothingTitle,
    nothingDescription,
    ...props
}: SearchPageProps<T>) {
    const itemsFiltered = useMemo(
        () => items?.filter(onFilter),
        [items, onFilter]
    )

    return (
        <>
            <Search {...props} />

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {items?.length ? (
                        itemsFiltered?.length ? (
                            <>{render(itemsFiltered)}</>
                        ) : (
                            <NotFound />
                        )
                    ) : (
                        <>
                            {hasReactNode(nothing) ? (
                                <>{nothing}</>
                            ) : (
                                <Nothing
                                    title={nothingTitle}
                                    description={nothingDescription}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </>
    )
}
