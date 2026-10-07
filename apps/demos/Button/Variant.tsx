import React from 'react'

import { Button, NingzhiProvider } from '@ningzhi-ui/ui'

const Variant: React.FC = () => {
    return (
        <NingzhiProvider>
            <Button variant="default">default</Button>
            <Button variant="filled">filled</Button>
            <Button variant="gradient">gradient</Button>
            <Button variant="light">light</Button>
            <Button variant="outline">outline</Button>
            <Button variant="subtle">subtle</Button>
            <Button variant="transparent">transparent</Button>
            <Button variant="white">white</Button>
        </NingzhiProvider>
    )
}

export default Variant
