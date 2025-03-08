'use client'

import { Input, Tappable } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounceForm } from '@/shared/ui/form'
import { Icon } from '@/shared/ui/icon'
import type { SearchForm, SearchProps } from './types/Search'

export function Search({ onSearch, debounceTime = 444 }: SearchProps) {
    const t = useTranslations('Search')

    const { register, reset, watch } = useForm<SearchForm>()

    const onClear = useCallback(() => {
        reset({
            value: ''
        })
    }, [reset])

    useDebounceForm({ watch, onSubmit: onSearch, debounceTime })

    return (
        <Input
            after={
                <Tappable
                    Component='div'
                    className={'flex'}
                    onClick={onClear}
                >
                    <Icon
                        name={'X'}
                        className={'text-hint'}
                    />
                </Tappable>
            }
            placeholder={t('placeholder')}
            {...register('value')}
        />
    )
}
