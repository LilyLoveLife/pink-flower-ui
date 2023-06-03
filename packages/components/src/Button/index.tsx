/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-03 23:09:59
 */
import React, {useState} from 'react'
import cs from 'classnames'
import styles from './index.module.scss'

import {Button} from 'antd'
import { ButtonProps, ButtonType } from 'antd/lib/button'

interface IProps extends Omit<ButtonProps, 'type'> {
    type?: 'login' | ButtonType
}

const PinkButton = (props: IProps, ref: any) => {
      const { className: customClassName, type, ...otherProps }: any = props
     let defaultClassName = cs({
        [styles.pinkBtn]: true,
        'color-pink-400': true
    })
    const className = customClassName ? `${defaultClassName} ${customClassName}` : defaultClassName

  return <Button placeholder='请输入' className={className} {...otherProps}></Button>
}
PinkButton.Group = Button.Group
export default PinkButton
// Object.assign(PinkButton, Button)
// export default React.forwardRef(PinkButton)