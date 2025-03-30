import {
    backButton,
    initData,
    init as initSDK,
    miniApp,
    setDebug,
    settingsButton,
    targetOrigin,
    themeParams,
    viewport
} from '@telegram-apps/sdk-react'
import { mount } from './mount'

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

    await Promise.all([miniApp, themeParams, viewport].map(mount))

    initData.restore()

    miniApp.ready()

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
