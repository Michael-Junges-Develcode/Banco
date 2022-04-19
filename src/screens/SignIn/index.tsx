import React, { useState } from 'react'
import { LoginButton } from '../../components/LoginButton'
import { Container, Footer, LoginWrapper, Header, Logo, SignInTitle, Title, TitleWrapper, CreateAccountWrapper, CreateAccountButton, ButtonText, CreateAccountText } from './styles'
import auth from '@react-native-firebase/auth'
import { Modal } from 'react-native'
import { SignInModal } from '../SignInModal'
import { LogInModal } from '../LogInModal'

export function SignIn() {  
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [logInModalOpen, setlogInModalOpen] = useState(false);

    function handleOpenLoginModal() {
        setlogInModalOpen(true);
    }

    function handleCloseLoginModal() {
        setlogInModalOpen(false);
    }

    function handleOpenSigninModal() {
        setSignInModalOpen(true);
    }

    function handleCloseSigninModal() {
        setSignInModalOpen(false);
    }

    async function handleSignInAnonimously() {
        const { user } = await auth().signInAnonymously();
        console.log(user);
    }  

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <Logo />
                    <Title>
                        Controle suas finanças
                        de forma muito simples
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
                    onPress={handleOpenLoginModal}
                    source={require('../../assets/icons/o-email.png')}
                    />
                    <CreateAccountWrapper>
                        <CreateAccountText>Não tem uma conta?</CreateAccountText>
                        <CreateAccountButton onPress={handleOpenSigninModal}>
                            <ButtonText>Criar conta</ButtonText>
                        </CreateAccountButton>
                    </CreateAccountWrapper>
                    
                </LoginWrapper>
            </Footer>
            <Modal visible={signInModalOpen}>
                <SignInModal 
                    closeSignInModal={handleCloseSigninModal}
                />    
            </Modal>
            <Modal visible={logInModalOpen}>
                <LogInModal 
                    closeLoginModal={handleCloseLoginModal}
                />
            </Modal>
        </Container>
    )
}