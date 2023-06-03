/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-07 17:20:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-03 23:15:04
 */
import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from '../../components/src/Button'
//import Button from '@pink-ui/components/dist/Button'
import {Button, Select} from '@pink-ui/components'
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
