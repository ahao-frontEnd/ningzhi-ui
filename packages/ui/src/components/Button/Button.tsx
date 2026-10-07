import React, { PropsWithChildren } from 'react'

import { useDisclosure } from '@ningzhi-ui/hooks'

import * as SC from './styles'
import { ButtonProps } from './types'

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ variant, disabled, children }) => {
    useDisclosure()

    return (
        <>
            <SC.Button disabled={disabled} data-disable={disabled} variant={variant}>
                {children}
            </SC.Button>
        </>
    )
}
