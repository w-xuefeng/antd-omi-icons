<div align="center">
  <img src="./assets/antd-omi-icon.svg" width="80">
</div>

<h1 align="center">
Ant Design Icons for Omi
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/antd-omi-icons?color=%23007acc&style=flat-square)](https://npmjs.org/package/antd-omi-icons)
[![NPM downloads](https://img.shields.io/npm/dt/antd-omi-icons?style=flat-square)](https://npmjs.org/package/antd-omi-icons)

</div>

English | [简体中文](README_zh_CN.md)

## All Icons

  [https://w-xuefeng.github.io/antd-omi-icons/](https://w-xuefeng.github.io/antd-omi-icons/)

## Install with yarn （or npm）

```bash
yarn add antd-omi-icons --save
```

or

```bash
npm install antd-omi-icons --save
```

## Basic Usage

First, you should add the icons that you need into the library.

```ts
import { WeElement, h, tag } from 'omi'
import 'antd-omi-icons/lib/es/icons/AccountBookFilled'
```

After that, you can use antd icons in your Omi components as simply as this:

```jsx
<o-account-book-filled />
```

If you want to import the full amount of icons, you can do as follows

- esm project:

  ```ts
  import 'antd-omi-icons/lib/es'
  ```

- cjs project:

  ```ts
  import 'antd-omi-icons/lib/cjs'
  ```

- CNDs

  - jsDelivr
    [https://cdn.jsdelivr.net/npm/antd-omi-icons/](https://cdn.jsdelivr.net/npm/antd-omi-icons/)
  - unpkg
    [https://unpkg.com/antd-omi-icons/](https://unpkg.com/antd-omi-icons/)
  - bundle.run
    [https://bundle.run/antd-omi-icons](https://bundle.run/antd-omi-icons)

    ```html
    <script src="https://cdn.jsdelivr.net/npm/omi@6.19.21/dist/omi.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/antd-omi-icons@0.0.13/lib/umd/antd-omi-icons.min.js"></script>
    ```
