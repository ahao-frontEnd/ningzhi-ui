import { createContext } from 'react'
export interface NingzhiContextValue {}

export const NingzhiContext = createContext<NingzhiContextValue | null>(null)
