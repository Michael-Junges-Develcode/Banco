import React, { useState } from 'react'
import { Alert } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import auth from '@react-native-firebase/auth'
import { TextInputProps } from 'react-native';
import { Control, useForm } from 'react-hook-form'
import { InputCreateAccount } from '../../components/Form/InputCreateAccount';

export interface Props {
    closeSignInModal: () => void;
}

export function SignInModal({
    closeSignInModal
}: Props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        control,
        handleSubmit,
        reset,
        formState
    } = useForm()

    function handleCreateUserAccount() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => Alert.alert('Usuário criado com sucesso!'))
    }

    const RootView = gestureHandlerRootHOC(() => (
        <>
            <InputCreateAccount
                name="email"
                placeholder='Email'
                keyboardType="email-address"    
                control={control}
            />
            <InputCreateAccount
                name="password"
                placeholder='Senha'
                secureTextEntry={true}
                control={control}
            />
            <Button
                title="Criar conta"
                onPress={handleCreateUserAccount}  
            />
        </>
    ))

    return (
        <RootView />
    )
}