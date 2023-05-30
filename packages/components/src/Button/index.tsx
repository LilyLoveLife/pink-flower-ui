/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-30 21:16:28
 */
import React, {useState} from 'react'
import cs from 'classnames'
import styles from './index.module.scss'

// import 'uno.css'

// import  './index.css'
// interface IButtonProps {
//     className?: string
// }


import {Button} from 'antd'
import { ButtonProps, ButtonType } from 'antd/lib/button'

interface IProps extends Omit<ButtonProps, 'type'> {
    type?: 'login' | ButtonType
}

const PinkButton = (props: IProps, ref: any) => {
  // return <button className='color-pink-400'>提交</button>
      const { className: customClassName, type, ...otherProps }: any = props
     let defaultClassName = cs({
        [styles.customBtn]: true,
        // [styles['border-pink']]: true,
        // [styles.login]: type === 'login',
        'color-pink-400': true
    })
    const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName

  return <Button className={className} {...otherProps}></Button>
    // const { className: customClassName, type, ...otherProps }: any = props
    // const iconClasses = classNames(
    //     // iconPrefixCls,
    //     // {
    //     //   [`${iconPrefixCls}-${sizeCls}`]: sizeCls,
    //     // },
    //     className
    // )
    // const InternalButton = (props: any, ref: any) => {
    //     const {
    //         loading = false,
    //         type = 'default',
    //         size: customizeSize,
    //         disabled: customDisabled,
    //         className,
            
    //     } = props
    //     return <Button {...props} ref={ref}></Button>
    // }

    // let defaultClassName = cs({
    //     // [styles.customBtn]: true,
    //     // [styles['border-pink']]: true,
    //     // [styles.login]: type === 'login',
    //     'color-pink-400': true
    // })
    // const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName
      
    // return <Button  type={['login'].includes(type) ? 'primary' : type} className={className} {...otherProps} ></Button>
    // return <Button  type={['login'].includes(type) ? 'primary' : type} className={'pink'} >submit</Button>

}
Object.assign(PinkButton, Button)
// PinkButton.xxx = xxx
export default PinkButton
// Object.assign(PinkButton, Button)

// export default React.forwardRef(PinkButton)