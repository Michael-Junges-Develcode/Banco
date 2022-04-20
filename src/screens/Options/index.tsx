import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, Text } from 'react-native';
import auth from '@react-native-firebase/auth'
import { BackButton, Container, Header, OptionsWrapper, Title } from './styles';

interface Props {
    onPress: () => void;
}

export function Options({ onPress }: Props) {

    function handleLogout() {
        auth().signOut()
    }

    return (
        
            <Container>
                <Header>
                    <Title>Opções</Title>
                </Header>
                
                <OptionsWrapper>
                <Text>MICHAEL</Text>
                <BackButton title={"Voltar"} onPress={onPress}/>
                </OptionsWrapper>

            </Container>
       
    )
}