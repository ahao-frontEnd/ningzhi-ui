import React from 'react'

import { SegmentedControl } from '@ningzhi-ui/ui'

const Size: React.FC = () => {
    const data = [
        {
            value: 'up',
            label: '上'
        },
        {
            value: 'down',
            label: '下'
        },
        {
            value: 'left',
            label: '左'
        },
        {
            value: 'right',
            label: '右'
        }
    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
                大-large
                <SegmentedControl data={data} animated size="large" />
            </div>
            <div>
                中-medium
                <SegmentedControl data={data} animated size="medium" />
            </div>
            <div>
                小-small
                <SegmentedControl data={data} animated size="small" />
            </div>
        </div>
    )
}

export default Size
