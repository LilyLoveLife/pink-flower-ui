/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-28 01:00:35
 */
import React from "react";
import cs from "classnames";

import { Button } from "antd";
import { ButtonProps, ButtonType } from "antd/lib/button";
import styles from "./index.module.scss";

interface IProps extends Omit<ButtonProps, "type"> {
  type?: "login" | ButtonType; // type: login 为登录相关页面定制按钮样式
}

const PinkButton = (props: IProps) => {
  const { className: customClassName, type, ...otherProps }: IProps = props;
  const defaultClassName = cs({
    [styles.pinkBtn]: true,
    "color-pink-400": true,
    [styles.login]: type === "login",
  });
  const className = customClassName
    ? `${defaultClassName} ${customClassName}`
    : defaultClassName;

  return (
    <Button
      // ref={ref}
      type={type === "login" ? "default" : type}
      placeholder="请输入"
      className={className}
      {...otherProps}
    />
  );
};
PinkButton.Group = Button.Group;
export default PinkButton;
// export default React.forwardRef(PinkButton);
