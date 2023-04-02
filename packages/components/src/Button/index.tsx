/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-04-02 22:54:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-02 23:09:14
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
}