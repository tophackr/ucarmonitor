import {
    backButton,
    initData,
    init as initSDK,
    isConcurrentCallError,
    isFunctionNotAvailableError,
    miniApp,
    setDebug,
    settingsButton,
    targetOrigin,
    themeParams,
    viewport
} from '@telegram-apps/sdk-react'

/**
 * Initializes the application and configures its dependencies.
 */
export async function init(debug: boolean): Promise<void> {
    // Set @telegram-apps/sdk-react debug mode.
    setDebug(debug)
    targetOrigin.set('https://platformer-hq.github.io')

    // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
    // Also, configure the package.
    initSDK()

    // Mount all components used in the project.
    if (backButton.isSupported()) backButton.mount()
    if (settingsButton.mount.isAvailable()) settingsButton.mount()

    if (!miniApp.isMounted()) {
        try {
            await miniApp.mount()
        } catch (error) {
            if (!isConcurrentCallError(error)) throw error
        }
    }

    if (!themeParams.isMounted()) {
        try {
            await themeParams.mount()
        } catch (error) {
            if (!isConcurrentCallError(error)) throw error
        }
    }

    initData.restore()

    if (!viewport.isMounted()) {
        try {
            await viewport.mount()
        } catch (error) {
            if (!isConcurrentCallError(error)) throw error
        }

        try {
            if (!viewport.isCssVarsBound()) viewport.bindCssVars()
        } catch (error) {
            if (!isFunctionNotAvailableError(error)) {
                console.error(
                    'Something went wrong mounting the viewport',
                    error
                )
            }
        }
    }

    if (!miniApp.isCssVarsBound()) miniApp.bindCssVars()
    if (!themeParams.isCssVarsBound()) themeParams.bindCssVars()

    miniApp.ready()

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
