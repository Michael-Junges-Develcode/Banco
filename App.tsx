import React from 'react'
import { SafeAreaView } from 'react-native'
import { Dashboard } from './src/screens/Dashboard'
import theme from './src/global/styles/theme'
import { ThemeProvider } from "styled-components"


export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>

    )
}

