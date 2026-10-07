import styled from 'styled-components'

import { Size } from '../../types/size'

export const SegmentedControlWrapper = styled.div`
    position: relative;
    display: inline-flex;
    padding: 2px;
    border-radius: 8px;
    background-color: var(--ningzhi-color-gray-0);
    /** 变体配置 */
    width: 100%;
`

export const SegmentedControlItem = styled.div`
    position: relative;
    overflow: hidden;
    flex: 1;
`

export const SegmentedControlRadio = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
    visibility: hidden;
`

/**
 * get segmented control size by size
 * @param size
 * @returns
 */
export function getSegmentedControlSize(size: Size) {
    switch (size) {
        case 'large':
            return 32
        case 'medium':
            return 28
        case 'small':
            return 26
        default:
            return 28
    }
}

export function getSegmentedControlRadius(radius: Size) {
    switch (radius) {
        case 'large':
            return 10
        case 'medium':
            return 6
        case 'small':
            return 4
        default:
            return 6
    }
}

export const SegmentedControlLabel = styled.label`
    width: 100%;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    user-select: none;
    color: var(---ningzhi-color-black);
    border: 0.5px solid transparent;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    height: var(--ningzhi-segmented-control-size);
    border-radius: var(--ningzhi-segmented-control-radius);
    &[data-disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`

export const SegmentedControlIndicator = styled.div`
    position: absolute;
    height: 100%;
    width: 100px;
    top: 0;
    left: 0;
    border-radius: 6px;
    background-color: var(--ningzhi-color-white);
    box-shadow: 0px 1px 4px 0px rgba(16, 24, 40, 0.1);
    /* animated */
    transition: all 0.3s;
`
