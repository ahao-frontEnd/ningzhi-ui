import { useContext } from 'react'

import { DEFAULT_THEME } from './default-theme'
import { NingzhiThemeContext } from './NingzhiTheme.context'

export const useSafeNingzhiTheme = () => useContext(NingzhiThemeContext) || DEFAULT_THEME

export const useNingzhiTheme = () => {
    const ctx = useContext(NingzhiThemeContext)
    if (!ctx) {
        throw new Error('@ningzhi-ui/ui: NingzhiProvider was not found in component tree, make sure you have it in your app')
    }

    return ctx
}
