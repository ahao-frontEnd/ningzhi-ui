import React from 'react'

import '../ThemeProvider/global.css'

import { NingzhiThemeProvider } from '../ThemeProvider/NingzhiThemeProvider'
import { NingzhiThemeOverrides } from '../types/theme.types'

import { NingzhiContext } from './Ningzhi.context'

export interface NingzhiProviderProps {
    // The theme overrides to apply.
    theme?: NingzhiThemeOverrides
    // The children to render.
    children?: React.ReactNode
}

export const NingzhiProvider: React.FC<NingzhiProviderProps> = ({ theme, children }) => {
    return (
        <NingzhiContext.Provider value={{}}>
            <NingzhiThemeProvider theme={theme}>{children}</NingzhiThemeProvider>
        </NingzhiContext.Provider>
    )
}

NingzhiProvider.displayName = '@ningzhi-ui/ui/NingzhiProvider'
