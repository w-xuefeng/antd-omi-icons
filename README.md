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

Meanwhile, you can also import it by specific name like this

```ts
import { AccountBookFilled } from 'antd-omi-icons/lib/es/icons'
```

or

```ts
import AccountBookFilled from 'antd-omi-icons/lib/es/icons/AccountBookFilled'
```

then use it as this:

```jsx
<AccountBookFilled />
```
If your project moudle type is commonjs, replace `es` with `cjs` in the path when you using `require`.

If you want to import the full amount of icons, you can do as follows

- esm project:

  ```ts
  import 'antd-omi-icons/lib/es'
  ```

- cjs project:

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
    <script src="https://cdn.jsdelivr.net/npm/omi@6.25.3/dist/omi.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/antd-omi-icons@0.0.25/lib/umd/antd-omi-icons.min.js"></script>
    ```
