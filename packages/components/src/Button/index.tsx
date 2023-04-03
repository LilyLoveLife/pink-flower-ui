/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-04 00:53:55
 */
import React, {useState} from 'react'
import classNames from 'classnames'

interface IButtonProps {
    className?: string
}

const Button = (props: IButtonProps) => {
    const {className} = props
    const iconClasses = classNames(
        // iconPrefixCls,
        // {
        //   [`${iconPrefixCls}-${sizeCls}`]: sizeCls,
        // },
        className
    )
    const InternalButton = (props, ref) => {
        const {
            loading = false,
            type = 'default',
            size: customizeSize,
            disabled: customDisabled,
            className,
            
        } = props
    }
    return React.forwardRef(InternalButton)
}