/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2023-07-01 17:42:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-02 16:31:00
 */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../../../../../../../../vite.svg";
import "./App.css";
import Button from "./Button";

const App = () => {
  const [count, setCount] = useState(0);
  console.log(11);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <Button>Pink Button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
