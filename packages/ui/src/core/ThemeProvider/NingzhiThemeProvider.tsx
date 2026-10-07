import React, { useMemo } from 'react'

import { NingzhiThemeOverrides } from '../types/theme.types'

import { DEFAULT_THEME } from './default-theme'
import { NingzhiThemeContext } from './NingzhiTheme.context'
import { useSafeNingzhiTheme } from './useNingzhiTheme'

export interface NingzhiThemeProviderProps {
    // Determines whether theme should be inherited from parent NingzhiProvider, `true` by default
    inherit?: boolean
    // Theme override object
    theme?: NingzhiThemeOverrides
    // Your application or part of the application that requires different theme
    children?: React.ReactNode
}

export function NingzhiThemeProvider({ theme, children, inherit = true }: NingzhiThemeProviderProps) {
    const parentTheme = useSafeNingzhiTheme()
    const mergedTheme = useMemo(() => Object.assign(inherit ? parentTheme : DEFAULT_THEME, theme), [theme, parentTheme, inherit])

    return <NingzhiThemeContext.Provider value={mergedTheme}>{children}</NingzhiThemeContext.Provider>
}

NingzhiThemeProvider.displayName = '@ningzhi-ui/ui/NingzhiThemeProvider'
