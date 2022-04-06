import React from 'react'
import { SafeAreaView } from 'react-native'
import theme from './src/global/styles/theme'
import { ThemeProvider } from "styled-components"
import { Dashboard } from './src/screens/Dashboard'
import { CategorySelect } from './src/screens/CategorySelect'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

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

