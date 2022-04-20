import React, { useState } from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { Button, Icon } from './styles'

interface Props extends BorderlessButtonProps {
    name: string
    onPress: () => void
}

export function OptionsButton({ onPress, name, ...rest }: Props) {

    return(
        <Button onPress={ onPress } {...rest}>
            <Icon name={name}/>
        </Button>
    )
}