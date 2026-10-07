# @ningzhi-ui/ui

Ningzhi UI 是一个 React 组件库，架构思路借鉴 Mantine，追求极致。

## 特性

-   🎨 **主题系统** — 提供浅色和深色主题的自定义算法，支持主题覆盖
-   🏗️ **企业级架构** — 完全符合企业级组件库研发标准，架构思路借鉴 Mantine
-   📦 **Tree Shaking** — 基于 ES Module，按需加载，零冗余
-   🔧 **TypeScript 优先** — 完整的类型定义，开发体验极佳
-   📱 **响应式** — 内置断点系统，适配多端

## 安装

```bash
# npm
npm install @ningzhi-ui/ui @ningzhi-ui/hooks styled-components

# pnpm
pnpm add @ningzhi-ui/ui @ningzhi-ui/hooks styled-components

# yarn
yarn add @ningzhi-ui/ui @ningzhi-ui/hooks styled-components
```

> `react`、`@ningzhi-ui/hooks`、`styled-components` 均为 peer dependencies，需要同时安装。`react` 通常已在项目中存在。

## 快速开始

在应用根组件中引入 `NingzhiProvider`：

```tsx
import { NingzhiProvider, Button } from '@ningzhi-ui/ui'

function App() {
    return (
        <NingzhiProvider>
            <Button variant="filled">Hello NingzhiUI</Button>
        </NingzhiProvider>
    )
}
```

## 组件

### Button 按钮

```tsx
import { Button } from '@ningzhi-ui/ui'
;<Button variant="filled" size="medium" disabled={false}>
    按钮
</Button>
```

| 属性       | 类型                                                                                                  | 默认值      | 说明         |
| ---------- | ----------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| `variant`  | `'filled' \| 'light' \| 'outline' \| 'transparent' \| 'white' \| 'subtle' \| 'default' \| 'gradient'` | `'default'` | 按钮样式变体 |
| `size`     | `'small' \| 'medium' \| 'large'`                                                                      | `'medium'`  | 按钮尺寸     |
| `disabled` | `boolean`                                                                                             | `false`     | 是否禁用     |

### SegmentedControl 分段控制器

```tsx
import { SegmentedControl } from '@ningzhi-ui/ui'

const data = [
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3', disabled: true }
]

<SegmentedControl
    data={data}
    defaultValue="1"
    size="md"
    animated
    onChange={value => console.log(value)}
/>
```

| 属性           | 类型                                   | 默认值  | 说明                 |
| -------------- | -------------------------------------- | ------- | -------------------- |
| `data`         | `SegmentedControlItem[]`               | —       | 选项数据（必填）     |
| `value`        | `string`                               | —       | 当前选中值（受控）   |
| `defaultValue` | `string`                               | —       | 默认选中值（非受控） |
| `size`         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`  | 尺寸                 |
| `radius`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | —       | 圆角                 |
| `animated`     | `boolean`                              | `false` | 是否开启动画         |
| `disabled`     | `boolean`                              | `false` | 是否禁用             |
| `onChange`     | `(value: string) => void`              | —       | 值变化回调           |

## 主题定制

通过 `NingzhiProvider` 的 `theme` 属性覆盖主题：

```tsx
import { NingzhiProvider } from '@ningzhi-ui/ui'

const theme = {
    // 主题覆盖配置
}

<NingzhiProvider theme={theme}>
    <App />
</NingzhiProvider>
```

## 工具函数

```tsx
import { darken, lighten, toRgba } from '@ningzhi-ui/ui'

darken('#228be6', 0.1) // 颜色加深
lighten('#228be6', 0.1) // 颜色变浅
toRgba('#228be6', 0.5) // 转 rgba
```

## 项目结构

```
src/
├── components/          # 组件
│   ├── Button/          # 按钮
│   └── SegmentedControl/# 分段控制器
├── core/
│   ├── Provider/        # 全局 Provider
│   ├── ThemeProvider/   # 主题系统
│   ├── types/           # 类型定义
│   └── utils/           # 工具函数
├── hooks/               # 内部 Hooks
└── index.ts             # 入口
```

## 开发

```bash
# 安装依赖
pnpm install

# 监听构建
pnpm dev

# 构建
pnpm build

# 发布
pnpm release
```
