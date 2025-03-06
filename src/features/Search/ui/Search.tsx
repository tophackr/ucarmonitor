'use client'

import { Input, Tappable } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounceForm } from '@/shared/hooks'
import { LucideIcon } from '@/shared/ui'
import type { SearchForm, SearchProps } from '../model/Search'

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
                    <LucideIcon
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
