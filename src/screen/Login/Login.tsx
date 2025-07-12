import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { styles }  from './style';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
        setLoading(false);
        navigation.navigate('HomeDrawer');
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <Animated.View entering={SlideInDown.duration(1000)} style={styles.logoContainer}>
        <Text style={styles.play}>Play</Text>
        <Text style={styles.bank}>Bank</Text>
      </Animated.View>

      <Text style={styles.title}>Entrar na conta</Text>

      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#aaa"
        value={cpf}
        onChangeText={setCPF}
        keyboardType="numeric"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </Pressable>

      {!loading ? (
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      ) : (
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 16 }} />
      )}
    </View>
  );
}