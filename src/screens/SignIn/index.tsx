import React, { useState } from 'react'
import { LoginButton } from '../../components/LoginButton'
import { Container, Footer, LoginWrapper, Header, Logo, SignInTitle, Title, TitleWrapper, CreateAccountWrapper, CreateAccountButton, ButtonText, CreateAccountText } from './styles'
import auth from '@react-native-firebase/auth'
import { Alert, Modal, Text } from 'react-native'
import { SignInModal } from '../SignInModal'
import { useForm } from 'react-hook-form'

export function SignIn() {  
    const [signInModalOpen, setSignInModalOpen] = useState(false);

    const { control } = useForm()

    function handleOpenModal() {
        setSignInModalOpen(true);
    }

    function handleCloseModal() {
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
                    onPress={handleOpenModal}
                    source={require('../../assets/icons/o-email.png')}
                    />
                    <CreateAccountWrapper>
                        <CreateAccountText>Não tem uma conta?</CreateAccountText>
                        <CreateAccountButton onPress={handleOpenModal}>
                            <ButtonText>Criar conta</ButtonText>
                        </CreateAccountButton>
                    </CreateAccountWrapper>
                    
                </LoginWrapper>
            </Footer>
            <Modal visible={signInModalOpen}>
                <SignInModal 
                    closeSignInModal={handleCloseModal}
                    />
            </Modal>
        </Container>
    )
}