import { actionsRoute } from '@/entities/interaction'
import type { NestedTranslationClient } from '@/shared/i18n'
import type {
    ActionContentData,
    ActionContentProps
} from '../types/ActionContentProps'

export const generateContents = (
    id: string,
    t: NestedTranslationClient<'CarCategoryName'>,
    data: ActionContentData[]
): ActionContentProps[] => {
    const route = actionsRoute(id)

    return data.map(item => ({
        ...item,
        href: route.new(item.name),
        name: t(item.name)
    }))
}
