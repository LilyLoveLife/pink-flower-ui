---
nav:
  title: Getting Started
  order: 1
---

# Getting Started

## 引入 Pink-Flower-UI

从 npm、yarn 或 npm 安装并引入 antd。

```bash
$ npm add pink-flower-ui --save

$ yarn add pink-flower-ui --save

$ pnpm add pink-flower-ui --save
```

修改 `src/App.js`，引入 Pink-Flower-UI 的按钮组件。

```tsx
import React from 'react';
import { Button } from 'pink-flower-ui';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

好了，现在你应该能看到页面上已经有了一个按钮组件，接下来就可以继续选用其他组件开发应用了。

我们现在已经把Pink-Flower-UI组件成功运行起来了，开始开发你的应用吧！
