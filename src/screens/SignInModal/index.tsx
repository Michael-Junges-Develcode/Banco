import React, { useState } from 'react'
import { Alert } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import auth from '@react-native-firebase/auth'
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form'

export interface Props extends TextInputProps {
    closeSignInModal: () => void;
    control: Control;
    name: string;
    error: string;
}

export function SignInModal({
    control,
    name,
    closeSignInModal,
    ...rest
}: Props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCreateUserAccount() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => Alert.alert('Usuário criado com sucesso!'))
    }

    const RootView = gestureHandlerRootHOC(() => (
        <>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <>
                        <Input
                            placeholder='Email'
                            keyboardType='email-address'
                            onChangeText={onChange}
                            value={value}
                            {...rest}
                        />
                        <Input
                            placeholder='Senha'
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                            {...rest} 
                        />
                    </>
                )}
                <Button
                title="Selecionar"
                onPress={
                    closeSignInModal}
                
                />
        </>
    ))

    return (
        <RootView />
    )
}