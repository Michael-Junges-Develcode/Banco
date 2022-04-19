import React from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { Button, Icon } from './styles'
import auth from '@react-native-firebase/auth'

interface Props extends BorderlessButtonProps {
    name: string
}

export function LogoutButton({ onPress, name, ...rest }: Props) {
    
    function handleLogout() {
        auth().signOut()
    }

    return(
        <Button onPress={ handleLogout } {...rest}>
            <Icon name={name}/>
        </Button>
    )
}