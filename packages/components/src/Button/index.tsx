/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-07 17:41:45
 */
import React, {useState} from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
import {Button} from 'antd'

interface IButtonProps {
    className?: string
}

const PinkButton = (props: IButtonProps, ref: any) => {
    const {className} = props
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
    return <Button {...props} className={styles.pink}></Button>
}
export default React.forwardRef(PinkButton)