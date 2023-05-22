/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-22 21:33:00
 */
// import React, {useState} from 'react'
import React from 'react'
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
    // return <button>提交</button>
}
export default PinkButton
// export default React.forwardRef(PinkButton)