import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth'
import { BackButton, Buttons, Container, Header, OptionsWrapper, Title, View } from './styles';

interface Props {
    onPress: () => void;
}

export function Options({ onPress }: Props) {

    function handleLogout() {
        auth().signOut()
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Container>

                <Header>
                    <Title>Opções</Title>
                </Header>
                
                <View>
                    <OptionsWrapper>
                    <Buttons title={"Sair da conta atual"} onPress={handleLogout}/>
                    </OptionsWrapper>
                    
                    <BackButton>
                    <Buttons title={"Voltar"} onPress={onPress}/>
                    </BackButton> 
                </View>

            </Container>
        </GestureHandlerRootView>
       
    )
}