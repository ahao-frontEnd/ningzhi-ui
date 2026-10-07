const buttonVariants = ['filled', 'light', 'outline', 'transparent', 'white', 'subtle', 'default', 'gradient'] as const

export type ButtonVariant = (typeof buttonVariants)[number]

export interface ButtonProps {
    /**
     * The variant of the button
     */
    variant?: ButtonVariant
    /**
     * The size of the button
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * Whether the button is disabled
     */
    disabled?: boolean
}
