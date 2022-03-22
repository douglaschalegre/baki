import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';

import { Button } from '../../components/Button';
import { SignInContent } from '../../components/SignInContent';

import { styles } from './styles';
import {
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from '../../../sensitivedata';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    try {
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;
      if (type === 'sucess') {
        navigation.navigate('Trainings', { token: params.access_token });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <SignInContent />

      <Button
        title='Entrar com Google'
        icon='social-google'
        onPress={handleSignIn}
      />
    </View>
  );
}
