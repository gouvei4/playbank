import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  Animated,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { useBalance } from '../../contexts/BalanceContext';

export const TransferScreen = () => {
  const { balance } = useBalance();
  const navigation = useNavigation();
  const [amount, setAmount] = useState('0,00');
  const animatedValue = useRef(new Animated.Value(1)).current;
  const animatedKeyboard = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null); // <- input invisível para digitação

  const parseCurrency = (value: string) =>
    parseFloat(value.replace(/\./g, '').replace(',', '.'));

  const numericAmount = parseCurrency(amount);
  const numericBalance = parseCurrency(balance);
  const isAmountInvalid = numericAmount <= 0.0 || numericAmount > numericBalance;

  const handleTextChange = (text: string) => {
    let numericString = text.replace(/[^0-9]/g, '');

    if (numericString.length === 0) numericString = '000';
    while (numericString.length < 3) {
      numericString = '0' + numericString;
    }

    const reaisPart = numericString.slice(0, -2);
    const centavosPart = numericString.slice(-2);
    const reaisSemZeros = reaisPart.replace(/^0+(?=\d)/, '') || '0';
    const reaisFormatados = reaisSemZeros.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setAmount(`${reaisFormatados},${centavosPart}`);

    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };


  const handleContinue = () => {
    if (numericAmount <= 0.00) {
      Alert.alert('Valor inválido', 'Informe um valor maior que R$ 0,01');
      return;
    }

    if (numericAmount > numericBalance) {
      Alert.alert('Saldo insuficiente', 'Você não tem saldo suficiente para esta transferência.');
      return;
    }

    navigation.navigate('PaymentMethodScreen', { amount });
  };

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardWillShow', (e) => {
      Animated.timing(animatedKeyboard, {
        toValue: -e.endCoordinates.height + 10,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });

    const hideSub = Keyboard.addListener('keyboardWillHide', () => {
      Animated.timing(animatedKeyboard, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const [reais, centavos] = amount.split(',');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#FFF176', '#FFD54F']}
          style={styles.gradientContainer}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PixKeyInput')}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color="#333" />
              </TouchableOpacity>
              <Text style={styles.title}>Digite o valor da transferência</Text>
            </View>

            <View style={styles.amountContent}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => inputRef.current?.focus()}
                style={styles.amountContainer}
              >
                <Text style={styles.currencySymbol}>R$</Text>

                <Animated.View
                  style={{
                    transform: [{ scale: animatedValue }],
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <Text style={styles.reaisText}>{reais}</Text>
                  <Text style={styles.centavosText}>,{centavos}</Text>
                </Animated.View>

                <TextInput
                  ref={inputRef}
                  style={styles.hiddenInput}
                  keyboardType="numeric"
                  value={amount.replace(/\D/g, '')}
                  onChangeText={handleTextChange}
                  autoFocus
                />
              </TouchableOpacity>


              <Text style={styles.availableAmountText}>
                R$ {balance} disponíveis
              </Text>
            </View>
              <TouchableOpacity
                style={[
                  styles.continueButton,
                  isAmountInvalid ? styles.continueButtonDisabled : {},
                ]}
                onPress={handleContinue}
                disabled={isAmountInvalid}
              >
                <Text style={styles.continueButtonText}>Continuar</Text>
              </TouchableOpacity>

          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
