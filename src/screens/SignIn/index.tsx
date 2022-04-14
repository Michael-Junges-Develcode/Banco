import React, { useContext } from 'react'
import { SignInSocialButton } from '../../components/SignInSocialButton'
import { useAuth } from '../../hooks/auth';
import { Container, Footer, FooterWrapper, Header, Logo, SignInTitle, Title, TitleWrapper } from './styles'

export function SignIn() {
    const { user } = useAuth();
    console.log(user);

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
                <FooterWrapper>
                    <SignInSocialButton 
                    title="Entrar com Google"
                    source={require('../../assets/icons/google.png')}
                    />
                    <SignInSocialButton 
                    title="Entrar com Apple"
                    source={require('../../assets/icons/apple.png')}/>
                </FooterWrapper>
            </Footer>
        </Container>
    )
}