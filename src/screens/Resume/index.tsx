import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ChartContainer, Container, Content, Header, Month, MonthSelect, MonthSelectButton, MonthSelectIcon, Title } from './styles'
import { VictoryPie } from 'victory-native'
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { HistoryCard } from '../../components/HistoryCard'
import { categories } from '../../utils/categories';
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ActivityIndicator } from 'react-native'
import { LoadContainer } from '../Dashboard/styles'
import { useFocusEffect } from '@react-navigation/native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

interface User {
  username: FirebaseAuthTypes.User['displayName'];
  uid: FirebaseAuthTypes.User['uid'];
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  
  const user: User = auth().currentUser;

  const theme = useTheme();

  function handleChangeDate(action: 'next' | 'previous') {
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() + (action === 'next' ? 1 : -1));
    setSelectedDate(date);
  }

  async function loadData() {
    setIsLoading(true);
    const dataKey = `@kaelbank:transactions_user:${user.uid}`;
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expenses = responseFormatted
      .filter((expense: TransactionData) =>
        expense.type === 'negative' &&
        new Date(expense.date).getMonth() === selectedDate.getMonth() &&
        new Date(expense.date).getFullYear() === selectedDate.getFullYear()
      );

    const expensesTotal = expenses.reduce((accumulator: number, expense: TransactionData) => {
      return accumulator + Number(expense.amount);
    }, 0)

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expenses.forEach((expense: TransactionData) => {
        if (expense.category === category.key) {
          categorySum += Number(expense.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })

        const percent = `${((categorySum / expensesTotal) * 100).toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent
        });
      }
    });
    setTotalByCategories(totalByCategory);
    setIsLoading(false);
  };

  useFocusEffect(useCallback(() => {
    loadData();
  }, [selectedDate]));

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      {
        isLoading ?
          <LoadContainer>
            <ActivityIndicator
              color={theme.colors.primary}
              size="large"
            />
          </LoadContainer> :
          <Content
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              // paddingBottom: useBottomTabBarHeight()
            }}
          >

            <MonthSelect>
              <MonthSelectButton onPress={() => handleChangeDate('previous')}>
                <MonthSelectIcon name="chevron-left" />
              </MonthSelectButton>

              <Month>{format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</Month>

              <MonthSelectButton onPress={() => handleChangeDate('next')}>
                <MonthSelectIcon name="chevron-right" />
              </MonthSelectButton>
            </MonthSelect>

            <ChartContainer>
              <VictoryPie
                data={totalByCategories}
                colorScale={totalByCategories.map(category => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                    fill: theme.colors.shape
                  }
                }}
                labelRadius={50}
                x="percent"
                y="total"
              />
            </ChartContainer>
            {
              totalByCategories.map(item => (
                <HistoryCard
                  key={item.key}
                  title={item.name}
                  amount={item.totalFormatted}
                  color={item.color}
                />
              ))
            }
          </Content>
      }

    </Container>
  )
}