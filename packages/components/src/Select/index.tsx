/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 15:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-03 22:33:30
 */
import { Select as AntDSelect } from 'antd'
import SelectType, { SelectProps, OptionProps } from 'antd/lib/select'
import lodash from 'lodash'
import styles from './index.module.scss'
import cs from 'classnames'
import React from 'react'
// type getDynamicAttrsType<P> = P extends (((...args: infer A) => React.ReactElement) & infer DynamicAttrsType) ? DynamicAttrsType : never
// type aa = ((props: SelectProps) => JSX.Element) & getDynamicAttrsType<typeof AntDSelect>
// const {OptGroup} = AntDSelect
//& getParamsAndReturn<typeof AntDSelect>
const PinkSelect: any = (props: SelectProps) => {
  const { className: customClassName, popupClassName: customPopupClassName,  ...otherProps }: any = props // children,
  let defaultClassName = cs({
      [styles.pinkSelect]: true,
  })
  const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName
  return <AntDSelect className={className} placeholder='请选择' {...otherProps}></AntDSelect>
}
// Object.assign(PinkSelect, {...AntDSelect})
// Object.assign(Select, AntDSelect)
PinkSelect.Option = AntDSelect.Option
//DefaultSelect.OptGroup = OptGroup
PinkSelect.OptGroup = AntDSelect.OptGroup
// Object.assign(PinkSelect, AntDSelect)
//PinkSelect.Option = lodash.cloneDeep(AntDSelect.Option)
// DefaultSelect.Option = (props: OptionProps) => {
//   return <AntDSelect.Option {...props}></AntDSelect.Option>
// }
// const Option = (props: OptionProps) => {
//   return <AntDSelect.Option {...props}></AntDSelect.Option>
// }
// type my<P, A> = P & getDynamicAttrsType<A>
//const PinkSelect: my<typeof DefaultSelect, typeof AntDSelect> = DefaultSelect

export default PinkSelect
