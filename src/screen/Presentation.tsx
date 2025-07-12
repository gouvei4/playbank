import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function PresentationScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Animated.Text entering={SlideInRight.delay(100).duration(800)} style={styles.line1}>
        Traga
      </Animated.Text>

      <Animated.Text entering={SlideInRight.delay(400).duration(800)} style={styles.line2}>
        seu dinheiro
      </Animated.Text>

      <Animated.Text entering={SlideInRight.delay(700).duration(800)} style={styles.line3}>
        e renda até <Text style={styles.highlight}>120% do CDI</Text>
      </Animated.Text>

<View style={styles.authContainer}>
  <Pressable onPress={() => navigation.navigate('Login')} style={styles.button}>
    <Text style={styles.buttonText}>Entrar</Text>
  </Pressable>

  <Pressable onPress={() => navigation.navigate('AccountChat')}>
    <Text style={styles.ctaText}>Abra sua conta grátis aqui</Text>
  </Pressable>
</View>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  textContainer: {
    marginBottom: 60,
    width: '100%',
    alignItems: 'flex-start',
  },
  line1: {
    fontSize: 52,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  line2: {
    fontSize: 48,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  line3: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  highlight: {
    color: 'yellow',
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
  },
  authContainer: {
    top: 200,
    width: '100%',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  link: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textDecorationLine: 'underline',
  },
  button: {
  backgroundColor: '#fff',
  paddingVertical: 12,
  paddingHorizontal: 150,
  borderRadius: 2,
  marginTop: 8,
},
buttonText: {
  color: '#000',
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
  fontFamily: 'Montserrat-Bold',
},

ctaText: {
  marginTop: 16,
  fontSize: 16,
  color: '#fff',
  fontFamily: 'Montserrat-Regular',
  top: 30,
},


});
