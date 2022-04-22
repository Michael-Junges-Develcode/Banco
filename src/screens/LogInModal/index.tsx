import React, { useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import auth from '@react-native-firebase/auth'
import { GestureHandlerView, Button2, Container, TextInput, Form, Title } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface Props {
    closeLoginModal: () => void;
}

export function LogInModal({ closeLoginModal }: Props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginUserAccount() {

        if (email === '' || password === '') {
            Alert.alert('Conta inválida.', 'Preencha todos os campos para se conectar em uma conta');
            return
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => Alert.alert('Bem vindo', 'Autenticado como ' + email))
            .catch(error => {
                Alert.alert("Erro", error.message);
                console.log(error)
            });   
    }

    return (

        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={{ flex: 1 }}
            containerStyle={{ flex: 1 }}
        >
            <Container>

                <Title>KaelFinances</Title>

                <Form>
                    <TextInput
                        value={email}
                        key={'email'}
                        placeholder='Email'
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                    <TextInput
                        value={password}
                        key={'password'}
                        placeholder='Senha'
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                    <Button2
                        title="Entrar"
                        onPress={handleLoginUserAccount}
                    />
                    <Button2
                        title="Voltar"
                        onPress={closeLoginModal}
                    />
                </Form>

            </Container>
        </TouchableWithoutFeedback>
    )
}