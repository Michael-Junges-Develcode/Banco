import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Button } from 'react-native';
import { LoginButton } from '../components/LoginButton';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '551720403088-7p998jcjfjugs93si5ot51u36jm5p4fe.apps.googleusercontent.com',
});

export async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
