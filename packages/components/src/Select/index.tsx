/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 15:21:00
 * @LastEditors: 
 * @LastEditTime: 2023-05-28 15:21:49
 */
import React from 'react'
import { Select as AntDSelect } from 'antd'
import { SelectProps } from 'antd/lib/select'
import Sel from 'antd/lib/select'
import styles from './index.module.scss'
import classNames from 'classnames'

const Select = (props: SelectProps) => {
  const { className: customClassName, popupClassName: customPopupClassName, children, ...otherProps }: any = props
  
  let defaultClassName = classNames({
    [styles.customSelect]: true,
  })
  let defaultPopupClassName = classNames({
    [styles.customSelectPopup]: true,
  })
  const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName
  const popupClassName = customPopupClassName ? `${defaultPopupClassName} ${customPopupClassName}` : defaultPopupClassName

  return <AntDSelect className={className}  {...otherProps} dropdownStyle={{zIndex: 1001}} popupClassName={popupClassName} getPopupContainer={node => node.parentElement}>{children}</AntDSelect>
};
Object.assign(Select, {...AntDSelect})
Select.Option = AntDSelect.Option
Select.OptGroup = AntDSelect.OptGroup
export default Select
