---
# # 单独配置名称
# nav: 名称
# # 同时配置名称和顺序，order 越小越靠前，默认为 0
nav:
    title: 指南
    order: -1
title: 基础指南
---

# 指南

NingzhiUI组件库，企业级 React UI 组件

## dumi 一些其他用法

```jsx {5} | pure
import React from 'react'

export default () => (
    <div>
        <h1>Hello dumi!</h1>
    </div>
)
```

<Tree>
  <ul>
    <li>
      src
     <small>这是 src 文件夹</small>
      <ul>
        <li>
          index.md
         <small>这是 index.md</small>
        </li>
      </ul>
    </li>
    <li>
      package.json
     <small>这是 package.json</small>
    </li>
  </ul>
</Tree>
