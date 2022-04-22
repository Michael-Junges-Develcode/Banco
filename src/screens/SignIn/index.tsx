import React, { useRef, useState } from 'react'
import { LoginButton } from '../../components/LoginButton'
import { Container, Footer, LoginWrapper, Header, Logo, SignInTitle, Title, TitleWrapper, CreateAccountWrapper, CreateAccountButton, ButtonText, CreateAccountText } from './styles'
import auth from '@react-native-firebase/auth'
import { SignInModal } from '../SignInModal'
import { LogInModal } from '../LogInModal'
import { Modalize } from 'react-native-modalize'

export function SignIn() {  

    const signInRef = useRef<Modalize>(null);
    const logInRef = useRef<Modalize>(null);

    function handleOpenSignIn() {
        signInRef.current?.open();
    };

    function handleOpenLogIn() {
        logInRef.current?.open();
    };

    function handleCloseLogIn() {
        logInRef.current?.close();
    };

    function onClose() {
        signInRef.current?.close();
    };
    
    async function handleSignInAnonimously() {
        auth().signInAnonymously();
    }  

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <Logo />
                    <Title>
                        Controle suas {"\n"} finanças
                        de forma {"\n"} muito simples
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {"\n"} uma das formas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <LoginWrapper>
                    <LoginButton 
                    title="Entrar com Google"
                    onPress={handleSignInAnonimously}
                    source={require('../../assets/icons/google.png')}
                    />
                    <LoginButton 
                    title="Entrar com email e senha"
                    onPress={handleOpenLogIn}
                    source={require('../../assets/icons/o-email.png')}
                    />
                    <CreateAccountWrapper>
                        <CreateAccountText>Não tem uma conta?</CreateAccountText>
                        <CreateAccountButton onPress={handleOpenSignIn}>
                            <ButtonText>Criar conta</ButtonText>
                        </CreateAccountButton>
                    </CreateAccountWrapper>
                    
                </LoginWrapper>
            </Footer>
           
            <Modalize ref={signInRef} modalHeight={650}>
                <SignInModal 
                    closeSignInModal={onClose}
                />    
            </Modalize>
            
            <Modalize ref={logInRef} modalHeight={570}>
                <LogInModal 
                    closeLoginModal={handleCloseLogIn}
                />    
            </Modalize>

        </Container>
    )
}