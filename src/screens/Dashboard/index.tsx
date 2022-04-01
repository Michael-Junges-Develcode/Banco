import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import { Container, 
        Header, 
        Icon, 
        Photo, 
        User, 
        UserGreeting, 
        UserInfo, 
        UserName, 
        UserWrapper, 
        HighlightCards, 
        Transactions, 
        Title, 
        TransactionList} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export const data: DataListProps[] = []

export function Dashboard() {

    const data: DataListProps[] = [
        {
        id: '1',
        type: "positive",
        title: "Desenvolvimento de site",
        amount: "R$ 11.559,02",
        category: {
            name: "Vendas",
            icon: "dollar-sign"
        },
        date: "25/03/2022"
    },
    {
        id: '2',
        type: "negative",
        title: "iFood",
        amount: "R$ 59,00",
        category: {
            name: "Alimentação",
            icon: "coffee"
        },
        date: "25/03/2022"
    },
    {
        id: '3',
        type: "negative",
        title: "Aluguel de apartamento",
        amount: "R$ 1.550,00",
        category: {
            name: "Casa",
            icon: "shopping-bag"
        },
        date: "25/03/2022"
    },
    {   
        id: '4',
        type: "positive",
        title: "Develcode",
        amount: "R$ 3.178,00",
        category: {
            name: "Salário",
            icon: "dollar-sign"
        },
        date: "25/03/2022"
    }
    ]
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
                <TransactionList
                    data={data}
                    keyExtractor={ (item: DataListProps) => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}  
                />

            </Transactions>
        </Container>
    )
}

