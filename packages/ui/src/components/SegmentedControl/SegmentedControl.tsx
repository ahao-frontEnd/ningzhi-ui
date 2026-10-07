import React, { useEffect, useId, useMemo, useState } from 'react'

import { useUncontrolled } from '../../hooks/use-uncontrolled/useUncontrolled'

import {
    getSegmentedControlRadius,
    getSegmentedControlSize,
    SegmentedControlIndicator,
    SegmentedControlItem,
    SegmentedControlLabel,
    SegmentedControlRadio,
    SegmentedControlWrapper
} from './styles'
import { SegmentedControlItem as SegmentedControlItemType, SegmentedControlProps } from './types'

export const SegmentedControl = (props: SegmentedControlProps) => {
    const { value, defaultValue, data, size = 'medium', animated, disabled, onChange } = props
    // Generate a unique ID for the current component
    const uuid = useId()
    // Used to store the ref for each label
    const [refs, setRefs] = useState<Record<string, HTMLLabelElement | null>>({})
    const [mounted, setMounted] = useState(false)

    const setElementRef = (element: HTMLLabelElement | null, val: string) => {
        refs[val] = element
        setRefs(refs)
    }

    const _data = useMemo(
        () =>
            data.map(
                (item: string | SegmentedControlItemType): SegmentedControlItemType =>
                    typeof item === 'string' ? { label: item, value: item } : item
            ),
        [data]
    )

    const internalDefaultValue = Array.isArray(_data)
        ? _data.find(item => !item.disabled)?.value ?? _data[0]?.value ?? undefined
        : undefined
    const [_value, handleValueChange] = useUncontrolled({
        value,
        defaultValue: defaultValue ?? internalDefaultValue,
        onChange
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const indicatorStyle = useMemo(() => {
        const dom = refs[_value]
        if (!dom) {
            return
        }
        const { offsetWidth, offsetHeight } = dom
        const parent = dom.parentElement
        if (!parent) {
            return
        }
        const { offsetLeft, offsetTop } = parent

        return {
            width: offsetWidth,
            height: offsetHeight,
            transform: `translate(${offsetLeft}px, ${offsetTop}px)`,
            transition: animated ? 'all 0.3s' : 'none'
        }
    }, [_value, mounted, refs])

    const controls = data.map(item => {
        const radioDisabled = disabled || item.disabled
        return (
            <SegmentedControlItem key={item.value}>
                <SegmentedControlRadio
                    name={uuid}
                    id={`${uuid}-${item.value}`}
                    type="radio"
                    checked={_value === item.value}
                    disabled={radioDisabled}
                    onChange={() => {
                        handleValueChange(item.value)
                    }}
                />
                <SegmentedControlLabel
                    data-disabled={radioDisabled}
                    data-size={size}
                    htmlFor={`${uuid}-${item.value}`}
                    ref={node => setElementRef(node, item.value)}
                >
                    {item.label}
                </SegmentedControlLabel>
            </SegmentedControlItem>
        )
    })

    return (
        <SegmentedControlWrapper
            style={
                {
                    '--ningzhi-segmented-control-size': `${getSegmentedControlSize(size)}px`,
                    '--ningzhi-segmented-control-radius': `${getSegmentedControlRadius(size)}px`
                } as React.CSSProperties
            }
        >
            {refs[_value] && mounted && <SegmentedControlIndicator style={indicatorStyle} />}
            {controls}
        </SegmentedControlWrapper>
    )
}
