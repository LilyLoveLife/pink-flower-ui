/*
 * @Description:
 * @version:
 * @Author:
 * @Date: 2023-05-28 15:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 19:46:43
 */
import { Select as AntDSelect } from "antd";
import { SelectProps } from "antd/lib/select";
import cs from "classnames";
import styles from "./index.module.scss";

const PinkSelect: any = (props: SelectProps) => {
  const {
    className: customClassName,
    popupClassName: customPopupClassName,
    ...otherProps
  }: SelectProps = props;
  const defaultClassName = cs({
    [styles.pinkSelect]: true,
  });
  const className = customClassName
    ? `${defaultClassName} ${customClassName}`
    : defaultClassName;
  return (
    <AntDSelect
      data-test="test"
      className={className}
      popupClassName={customPopupClassName}
      placeholder="请选择"
      {...otherProps}
    />
  );
};
PinkSelect.Option = AntDSelect.Option;
PinkSelect.OptGroup = AntDSelect.OptGroup;
export default PinkSelect;
