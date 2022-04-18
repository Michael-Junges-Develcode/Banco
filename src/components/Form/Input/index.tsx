import React from 'react'
import { TextInputProps } from 'react-native'
import { Container } from './styles'

export function Input({...rest}: TextInputProps) {
    return (
        <Container autoCapitalize="sentences" {...rest}/>
    )
}