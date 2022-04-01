import React from 'react'
import { SafeAreaView } from 'react-native'
import { Register } from './src/screens/Register'
import theme from './src/global/styles/theme'
import { ThemeProvider } from "styled-components"
import { Dashboard } from './src/screens/Dashboard'


export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Register />
        </ThemeProvider>

    )
}

