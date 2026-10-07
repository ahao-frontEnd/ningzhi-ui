import React from 'react'

import { Size } from '../../types/size'

export interface SegmentedControlItem {
    value: string
    label: React.ReactNode
    disabled?: boolean
}

export interface SegmentedControlProps {
    /**
     * The size of the segmented control
     */
    size?: Size
    /**
     * Whether the segmentd control is disabled
     */
    disabled?: boolean
    /**
     * The data of the items
     */
    data: SegmentedControlItem[]
    /**
     * The value of the selected item
     */
    value?: string
    /**
     * Uncontrolled component default value
     * */
    defaultValue?: string

    /**
     * The radius of the segmented
     * */
    radius?: Size

    /**
     * Whether the segmented control is animated
     * */
    animated?: boolean

    /**
     * Called when value changes
     * */
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void
}
