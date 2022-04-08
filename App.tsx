import React from 'react'
import theme from './src/global/styles/theme'
import { ThemeProvider } from "styled-components"
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function App() {
    return (
        <GestureHandlerRootView style={{ flex:1 }}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <AppRoutes />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

