import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'
import { Resume } from '../screens/Resume'
import { RFValue } from "react-native-responsive-fontsize"

export type AppRoutesParamList = {
    Home: undefined; // <- undefined = rota não requer parâmetros.
    Cadastro: undefined;
    Resumo: undefined;
  };

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParamList>()

export function AppRoutes() {

    const theme = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 65,
                },
                tabBarAllowFontScaling: true,
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.medium,
                    fontSize: RFValue(14),
                }
            }}
        >
            <Screen 
                name="Home" 
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Icon name="home" size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name="Cadastro" 
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Icon name="attach-money" size={size} color={color} />
                    )
                }}
            />
            <Screen 
                name="Resumo" 
                component={Resume}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Icon name="pie-chart" size={size} color={color} />
                    )
                }}
            />
        </Navigator>
    )
}