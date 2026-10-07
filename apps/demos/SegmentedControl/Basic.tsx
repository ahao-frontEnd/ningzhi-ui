import React from 'react'

import { SegmentedControl } from '@ningzhi-ui/ui'

const Basic: React.FC = () => {
    const data = [
        {
            value: 'man',
            label: '男'
        },
        {
            value: 'woman',
            label: '女'
        }
    ]
    return <SegmentedControl data={data} /* defaultValue="woman" */ />
}

export default Basic
