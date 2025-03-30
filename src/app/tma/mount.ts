import {
    isConcurrentCallError,
    isFunctionNotAvailableError,
    type miniApp,
    type themeParams,
    type viewport
} from '@telegram-apps/sdk-react'

type MountComponent = typeof miniApp | typeof themeParams | typeof viewport

export async function mount(component: MountComponent): Promise<void> {
    if (!component.isMounted()) {
        try {
            await component.mount()
        } catch (error) {
            if (!isConcurrentCallError(error)) throw error
        }

        try {
            if (!component.isCssVarsBound()) component.bindCssVars()
        } catch (error) {
            if (!isFunctionNotAvailableError(error)) throw error
        }
    }
}
