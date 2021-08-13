<div align="center">
  <img src="./assets/antd-omi-icon.svg" width="150">
</div>

<h1 align="center">
Ant Design Icons for Omi
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/antd-omi-icons?color=%23007acc&style=flat-square)](https://npmjs.org/package/antd-omi-icons)
[![NPM downloads](https://img.shields.io/npm/dt/antd-omi-icons?style=flat-square)](https://npmjs.org/package/antd-omi-icons)

</div>

[English](README.md) | 简体中文

## 全部图标

  [https://w-xuefeng.github.io/antd-omi-icons/](https://w-xuefeng.github.io/antd-omi-icons/)

## 使用 yarn 或 npm 安装

```bash
yarn add antd-omi-icons --save
```

或者

```bash
npm install antd-omi-icons --save
```

## 基本用法

首先，您应该将所需的图标导入到您的项目中，如 `AccountBookFilled`

```ts
import { WeElement, h, tag } from 'omi'
import 'antd-omi-icons/lib/es/icons/AccountBookFilled'
```

之后，你可以像这样简单地在你的 Omi 组件中使用 antd 图标:

```jsx
<o-account-book-filled />
```


如果你想使用全量图标，你可以像下面一样，在你的项目引入该文件

- esm 项目:
  ```ts
  import 'antd-omi-icons/lib/es'
  ```

- cjs 项目:
  ```ts
  require('antd-omi-icons/lib/cjs')
  ```

- CNDs

  - jsDelivr
    [https://cdn.jsdelivr.net/npm/antd-omi-icons/](https://cdn.jsdelivr.net/npm/antd-omi-icons/)
  - unpkg
    [https://unpkg.com/antd-omi-icons/](https://unpkg.com/antd-omi-icons/)
  - bundle.run
    [https://bundle.run/antd-omi-icons](https://bundle.run/antd-omi-icons)

    ```html
    <script src="https://cdn.jsdelivr.net/npm/omi@6.23.0/dist/omi.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/antd-omi-icons@0.0.13/lib/umd/antd-omi-icons.min.js"></script>
    ```
