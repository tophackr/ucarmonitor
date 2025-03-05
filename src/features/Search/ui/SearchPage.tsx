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
    onSearch,
    onFilter,
    nothing,
    nothingTitle,
    nothingDescription,
    debounceTime
}: SearchPageProps<T>) {
    const itemsFiltered = items?.filter(onFilter)

    return (
        <>
            <Search
                onSearch={onSearch}
                debounceTime={debounceTime}
            />

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
