import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const letters = ['P', 'L', 'A', 'Y', 'B', 'A', 'N', 'K'];

export default function LoadingExitScreen() {
  const navigation = useNavigation();
  const [animations] = useState(letters.map(() => new Animated.Value(0)));

  useEffect(() => {
    Animated.stagger(
      100,
      animations.map(anim =>
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim, {
              toValue: 1,
              duration: 900,
              useNativeDriver: true,
              easing: Easing.linear,
            }),
            Animated.timing(anim, {
              toValue: 1,
              duration: 900,
              useNativeDriver: true,
              easing: Easing.linear,
            }),
          ])
        )
      )
    ).start();

    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Presentation' }],
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        {letters.map((letter, index) => {
          const spin = animations[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          });

          const isPlay = index < 4;

          return (
            <Animated.Text
              key={index}
              style={{
                transform: [{ rotate: spin }],
                fontSize: isPlay ? 48 : 40,
                color: isPlay ? 'yellow' : '#fff',
                fontWeight: 'bold',
                marginLeft: isPlay ? 0 : index === 4 ? 24 : 4,
                marginTop: isPlay ? 0 : -10,
                fontFamily: Platform.select({ ios: 'Helvetica Neue', android: 'Roboto' }),
              }}
            >
              {letter}
            </Animated.Text>
          );
        })}
      </View>

      <Text style={styles.loadingText}>Encerrando sessão...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#ccc',
  },
});
