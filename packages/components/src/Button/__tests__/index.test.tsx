// import React from 'react'
// import { create, act } from 'react-test-renderer' // 虚拟dom
import { render } from '@testing-library/react' // dom
import Button from '../index'
jest.mock("react", () => {
    const originReact = jest.requireActual("react");
    const mUseRef = jest.fn();
    return {
      ...originReact,
      useRef: mUseRef,
    };
  });
describe('<Button />', () => {
    test('should render default', () => {
      const { container } = render(<Button></Button>)
      expect(container).toMatchSnapshot()
    });
  })