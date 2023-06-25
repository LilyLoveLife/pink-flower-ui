<!--
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-26 01:44:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 20:42:20
-->
```jsx
import React from 'react'
import {Select} from '@pink-ui/components'
export default () => {
    const options = [
        { key: 'option1', label: 'Option 1' },
        { key: 'option2', label: 'Option 2' },
        { key: 'option3', label: 'Option 3' },
    ]
    return <>
            <Select placeholder='一定要选择' options={options}></Select>
        </>
}
```