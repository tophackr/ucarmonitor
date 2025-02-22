import type { NestedTranslationClient, Translation } from '@/shared/i18n'
import { actionsRoute } from '../../route/actions'
import type {
    ActionContentData,
    ActionContentProps
} from '../../types/ActionContentProps'

export const generateContents = (
    id: string,
    t: NestedTranslationClient<'CarActionContents'>,
    data: ActionContentData[],
    category: keyof Translation['CarActionContents']
): ActionContentProps[] => {
    const route = actionsRoute(id)

    return data.map(item => ({
        ...item,
        href: route.new(item.name),
        name: t(
            `${category}.${item.name.replace('-', '_')}` as keyof Translation['CarActionContents'][typeof category]
        )
    }))
}
