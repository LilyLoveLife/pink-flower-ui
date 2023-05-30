/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 15:21:00
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-30 20:47:40
 */
import { Select as AntDSelect } from 'antd'
import { SelectProps } from 'antd/lib/select'
import styles from './index.module.scss'
import cs from 'classnames'
import React from 'react'

const PinkSelect = (props: SelectProps) => {
  // return <select>pink-select</select>
  // return <AntDSelect>
  //   <AntDSelect.Option value={1}>选项1</AntDSelect.Option>
  //   <AntDSelect.Option value={2}>选项2</AntDSelect.Option>
  // </AntDSelect>
  const { className: customClassName, popupClassName: customPopupClassName, children, ...otherProps }: any = props
  let defaultClassName = cs({
      pinkSelect: true,
    [styles.customSelect]: true,
  })
  const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName
  return <AntDSelect className={className} {...otherProps}>{children}</AntDSelect>

  // const { className: customClassName, popupClassName: customPopupClassName, children, ...otherProps }: any = props
  //   let defaultClassName = classNames({
  //     pinkSelect: true,
  //   // [styles.customSelect]: true,
  // })
  // let defaultPopupClassName = classNames({
  //   // [styles.customSelectPopup]: true,
  // })
  // const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName
  // const popupClassName = customPopupClassName ? `${defaultPopupClassName} ${customPopupClassName}` : defaultPopupClassName

  // return <AntDSelect className='pinkSelect'></AntDSelect>
  
  // className={className}
  // {...otherProps} 
  // {children}
  // popupClassName={popupClassName}
  // getPopupContainer={node => node.parentElement}
  // dropdownStyle={{zIndex: 1001}}

}
// Object.assign(Select, {...AntDSelect})
// Object.assign(Select, AntDSelect)
// PinkSelect.Option = AntDSelect.Option
// PinkSelect.OptGroup = AntDSelect.OptGroup
// Object.assign(PinkSelect, AntDSelect)
export default PinkSelect
