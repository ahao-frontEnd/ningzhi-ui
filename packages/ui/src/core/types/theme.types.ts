export type ningzhiSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface VariantColorResolverResult {
    background: string
    hover: string
    color: string
    border: string
    hoverColor?: string
}

export interface ningzhiTheme {}

// need replace partial to deepPartial use type-fest
export type NingzhiThemeOverrides = Partial<ningzhiTheme>
