import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import theme from './src/global/styles/theme'
import { ThemeProvider } from "styled-components"
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'
import { SignIn } from './src/screens/SignIn'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar barStyle="light-content" backgroundColor="transparent"
                    translucent 
                    />
                    <SignIn />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

