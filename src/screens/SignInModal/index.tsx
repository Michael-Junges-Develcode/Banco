import React, { useRef, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GestureHandlerView, Container, TextInput, Button2, Title, Form } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

interface Props {
    closeSignInModal: () => void;
}

// type User = {
//     username: FirebaseAuthTypes.User['displayName'];
//     uid: FirebaseAuthTypes.User['uid']; 
// }

export function SignInModal({ closeSignInModal }: Props) {
    
    const [email, setEmail] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    // console.log(typeof(username));
    // console.log(username)

        async function createUserAccount() {
           
                if (email === '' || password === '' || username === '') {
                    Alert.alert('Conta inválida.', 'Preencha todos os campos para criar uma conta');
                    return
                }

                await auth()
                .createUserWithEmailAndPassword(email, password)
                .catch(() => {
                    Alert.alert('Erro ao criar conta', 'Verifique seus dados e tente novamente.');
                    return
                });  
                const user = auth().currentUser;
                await user?.updateProfile({
                displayName: username
                })    
        }   

    return (

        //<GestureHandlerView>
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
                        value={username}
                        key={'username'}
                        placeholder='Nome de usuário'
                        onChangeText={setUsername}
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
                        onPress={createUserAccount}
                    />
                    <Button2
                        title="Voltar"
                        onPress={closeSignInModal}
                    />
                    </Form>

                </Container>
            </TouchableWithoutFeedback >
       // </GestureHandlerView>
    )
}