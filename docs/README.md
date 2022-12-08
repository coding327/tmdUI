# 快速开始

#### 安装组件库

```bash
npm i tmd-ui
```

#### 引用组件库
> 在`main.js`中引用组件库

```js
// 完整引入
import TMDUI from 'tmd-ui'
import 'tmd-ui/dist/css/index.css'
Vue.use(TMDUI)

// 按需引入
import { Demo } from 'tmd-ui'
import 'tmd-ui/dist/css/demo.css'
Vue.use(Demo)
```