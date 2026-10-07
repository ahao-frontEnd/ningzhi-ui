import { createContext } from 'react'

import { ningzhiTheme } from '../types/theme.types'

export const NingzhiThemeContext = createContext<ningzhiTheme | null>(null)
