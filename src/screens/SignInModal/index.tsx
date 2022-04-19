import React, { useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import auth from '@react-native-firebase/auth'
import { GestureHandlerView, Container, TextInput, Button2, Title, Form } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface Props {
    closeSignInModal: () => void;
}

export function SignInModal({ closeSignInModal }: Props) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    function handleCreateUserAccount() {
        if (email === '' || password === '') {
            Alert.alert('Conta inválida.', 'Preencha todos os campos para criar uma conta');
            return
        }
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => Alert.alert('Usuário criado com sucesso!'))
            .catch(error => {
                Alert.alert("Erro", error.message);
                console.log(error)
            });
        closeSignInModal();
    }

    return (

        <GestureHandlerView>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{ flex: 1 }}
                containerStyle={{ flex: 1 }}
            >
                <Container>

                    <Title>Criar conta</Title>

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
                        title="Criar conta"
                        onPress={handleCreateUserAccount}
                    />
                    <Button2
                        title="Voltar"
                        onPress={closeSignInModal}
                    />
                    </Form>

                </Container>
            </TouchableWithoutFeedback >
        </GestureHandlerView>
    )
}