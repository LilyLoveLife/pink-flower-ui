/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 15:21:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 16:00:24
 */
import { Select as AntDSelect } from 'antd'
import { SelectProps } from 'antd/lib/select'
import styles from './index.module.scss'
import cs from 'classnames'
import lodash from 'lodash'
const PinkSelect: any = (props: SelectProps) => {
  props.className = 'test'
  const { className: customClassName, popupClassName: customPopupClassName,  ...otherProps }: any = props // children,
  let defaultClassName = cs({
      [styles.pinkSelect]: true,
  })
  const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName
  return <AntDSelect data-id='6' className={className} placeholder='请选择' {...otherProps}></AntDSelect>
}
PinkSelect.Option = AntDSelect.Option
PinkSelect.OptGroup = AntDSelect.OptGroup
// Object.assign(PinkSelect, AntDSelect)
// DefaultSelect.Option = (props: OptionProps) => {
//   return <AntDSelect.Option {...props}></AntDSelect.Option>
// }

export default PinkSelect
