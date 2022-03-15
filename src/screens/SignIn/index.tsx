import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';

import { Button } from '../../components/Button';
import { SignInContent } from '../../components/SignInContent';

import { styles } from './styles';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    navigation.navigate('Trainings');
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
