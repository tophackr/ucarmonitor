import {
    $debug,
    backButton,
    initData,
    init as initSDK,
    miniApp,
    settingsButton,
    themeParams,
    viewport
} from '@telegram-apps/sdk-react'

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
    // Set @telegram-apps/sdk-react debug mode.
    $debug.set(debug)

    // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
    // Also, configure the package.
    initSDK()

    // Mount all components used in the project.
    if (backButton.isSupported()) backButton.mount()
    if (settingsButton.mount.isAvailable()) settingsButton.mount()

    if (!miniApp.isMounted()) miniApp.mount()
    if (!themeParams.isMounted()) themeParams.mount()

    initData.restore()

    if (!viewport.isMounted()) {
        void viewport
            .mount()
            .catch(error => {
                if (error.type !== 'ERR_ALREADY_MOUNTING') throw error
            })
            .then(() => {
                if (!viewport.isCssVarsBound()) viewport.bindCssVars()
            })
            .catch(error => {
                if (error.type !== 'ERR_NOT_MOUNTED') {
                    console.error(
                        'Something went wrong mounting the viewport',
                        error
                    )
                }
            })
    }

    if (!miniApp.isCssVarsBound()) miniApp.bindCssVars()
    if (!themeParams.isCssVarsBound()) themeParams.bindCssVars()

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
