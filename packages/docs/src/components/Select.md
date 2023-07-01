

```jsx
import React from 'react';
import { Select } from 'pink-flower-ui';
export default () => {
  const options = [
    { key: 'option1', label: 'Option 1' },
    { key: 'option2', label: 'Option 2' },
    { key: 'option3', label: 'Option 3' },
  ];
  return (
    <>
      <Select placeholder="一定要选择" options={options}></Select>
    </>
  );
};
```
