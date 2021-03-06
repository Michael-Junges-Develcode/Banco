import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';
import { ActivityIndicator } from 'react-native';

type User = {
    uid: string;
}

export function Routes() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            setUser(user)   
        });
        return subscriber;
    }, []);

    return (
        <>
           {user ? <AppRoutes /> : <SignIn />}
        </>
    )
}