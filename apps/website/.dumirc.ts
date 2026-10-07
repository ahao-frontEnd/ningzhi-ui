import { defineConfig } from 'dumi'
import path from 'node:path'

const isProduction = /* process.env.NODE_ENV === 'production' */ true
const isWin = process.platform === 'win32'

export default defineConfig({
    outputPath: 'docs-dist',
    npmClient: 'pnpm',
    mfsu: isWin ? undefined : {},
    apiParser: isProduction ? {} : false,
    resolve: {
        // 配置入口文件路径，API 解析将从这里开始
        entryFile: path.join(__dirname, '../../packages/ui/src/index.ts')
    },
    locales: [{ id: 'zh-CN', name: '中文' }],
    themeConfig: {
        favicons: ['/assets/images/logo.png'],
        logo: '/assets/images/logo.png',
        title: 'Ningzhi UI 组件库 | @ningzhi-ui/ui',
        footer: false,
        hideHomeNav: true,
        prefersColor: {
            default: 'dark',
            switch: false
        },
        apiHeader: {
            docUrl: `{github}/tree/master/src/{atomId}/index.md`,
            match: ['/components', '/mdx'],
            pkg: '@ningzhi-ui/ui',
            serviceList: false,
            sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`
        }
    },
    styles: [
        `html, body { background: transparent;  }

        @media (prefers-color-scheme: dark) {
            html, body { background: #000; }
        }
        `
    ],
    alias: {
        '@ningzhi-ui/ui': path.join(__dirname, '../../packages/ui/src')
    }
})
