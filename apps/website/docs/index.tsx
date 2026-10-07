import { useTheme } from 'antd-style'
import { MoonStar, Palette, Zap } from 'lucide-react'
import { Center } from 'react-layout-kit'

// `@lobehub/ui` 是 LobeHub 团队 （LobeChat 的开发团队）开源的 React UI 组件库。
// `website` 是用 dumi 搭建的组件库文档站，搭配了`dumi-theme-lobehub` 主题
// `@lobehub/ui` 的组件和这个主题风格统一，借用 LobeHub 的 UI 组件来快速搭一个落地页
import { Features, FeaturesProps, Highlighter } from '@lobehub/ui'

const items: FeaturesProps['items'] = [
    {
        description: '提供浅色和深色主题的自定义算法，提供美观且用户友好的选项。',
        icon: Palette,
        title: '主题'
    },
    {
        description: '完全符合企业级组件库研发标准，架构思路部分借鉴 mantine，值得深入研究',
        icon: Zap,
        title: '企业级'
    },
    {
        description: '组件库内容逐步更新，可持续跟进',
        icon: MoonStar,
        title: '持续更新'
    }
]

const example = `import { NingzhiProvider, Button } from '@ningzhi-ui/ui'

export default () => (
    <NingzhiProvider>
        <Button>Hello ningzhiEdu</Button>
    </NingzhiProvider>
)`

export default () => {
    const theme = useTheme()
    return (
        <Center gap={16}>
            <Center>
                <h2 style={{ fontSize: 20 }}>🤯 企业级UI组件库</h2>
                <div style={{ color: theme.colorTextDescription, textAlign: 'center' }}>
                    NingzhiUI UI 组件库 @ningzhi-ui/ui，具备主流库特性{' '}
                    <a href="https://mantine.dev/" rel="noreferrer" target="_blank">
                        mantine
                    </a>
                    , 优雅的 API 设计, <br />
                </div>
            </Center>
            <Highlighter language={'tsx'} style={{ width: '100%' }} type={'ghost'}>
                {example}
            </Highlighter>
            <Features items={items} />
        </Center>
    )
}
