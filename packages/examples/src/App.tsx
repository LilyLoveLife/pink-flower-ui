/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-07 17:20:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-02 00:30:02
 */
import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Select} from 'pink-flower-ui'
function App() {
  const [count, setCount] = useState(0)
  const options = [
    { key: 'option1', label: 'Option 1' },
    { key: 'option2', label: 'Option 2' },
    { key: 'option3', label: 'Option 3' },
  ]
  return (
    <>
      <div>
        <Button>example my Pink Button</Button>
        {/* <Select placeholder='一定要选择' options={options}>
        </Select> */}
        {/* <Select placeholder='一定要选择'>
          <Select.Option value={1}>选项1</Select.Option>
          <Select.Option value={2}>选项2</Select.Option>
        </Select> */}
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <div className="card">

      </div>
    </>
  )
}

export default App
