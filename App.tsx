import React, { useState, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import theme from './src/global/styles/theme'
import { ThemeProvider } from "styled-components"
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'
import { SignIn } from './src/screens/SignIn'
import auth from '@react-native-firebase/auth';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Routes } from './src/routes'

export function App() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar barStyle="light-content" backgroundColor="transparent"
                        translucent
                    />
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

