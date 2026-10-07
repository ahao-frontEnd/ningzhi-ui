import React from 'react'

import { SegmentedControl } from '@ningzhi-ui/ui'

const Animated: React.FC = () => {
    const data = [
        {
            value: 'up',
            label: '上'
        },
        {
            value: 'down',
            label: '下',
            disabled: true
        },
        {
            value: 'left',
            label: '左'
        },
        {
            value: 'right',
            label: '右',
            disabled: true
        }
    ]
    return <SegmentedControl data={data} animated />
}

export default Animated
