import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { Container, Header, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper, HighlightCards, Transactions, Title } from './styles'

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: "https://lh3.googleusercontent.com/a-/AOh14GjIG7LBgeDuaKH7BDqzTsuhOcHib-4Q-RBw7vHY=s288-p-no" }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Michael</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                type="up"
                    title="Entradas"
                    amount="R$ 17.400,78"
                    lastTransaction='Última entrada dia 25 de março' />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,02"
                    lastTransaction='Última saída dia 30 de março' />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 21.830,13"
                    lastTransaction='Março de 2022' />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
            </Transactions>
        </Container>
    )
}

