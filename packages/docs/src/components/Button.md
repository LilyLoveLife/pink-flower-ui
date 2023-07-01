#### Button

```jsx
import React from 'react';
import { Button } from 'pink-flower-ui';
export default () => {
  return (
    <>
      <Button>submit</Button>
    </>
  );
};
```

#### API:

| 成员         | 说明             | 类型                                                  | 默认值  | 备注 |
| :----------- | :--------------- | :---------------------------------------------------- | :------ | :--- |
| `type`       | 设置按钮类型     | primary \| ghost \| dashed \| link \| text \| default | default | -    |
| `classNames` | 语义化结构 class | Record<SemanticDOM, string> \| undefined              |         |
| `disabled`   | 设置按钮失效状态 | boolean                                               | false   | -    |
| `styles`     | 语义化结构 style | Record<SemanticDOM, CSSProperties>                    | -       |
| `onClick`    | 点击按钮时的回调 | (event: MouseEvent) => void                           | -       | -    |
