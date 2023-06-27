/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2023-06-27 23:15:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-28 02:23:04
 */
// import React from 'react'
// import { create, act } from 'react-test-renderer' // 虚拟dom
import { render, screen } from "@testing-library/react"; // dom
import Button from "../index";

// jest.mock("react", () => {
//   const originReact = jest.requireActual("react");
//   const mUseRef = jest.fn();
//   return {
//     ...originReact,
//     useRef: mUseRef,
//   };
// });
describe("<Button />", () => {
  test("should render default", () => {
    // render(<Button />);
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
  test("should render text", () => {
    // render(<Button />);
    const { container } = render(<Button>提交</Button>);
    // expect(container).toMatchSnapshot();
  });
});
