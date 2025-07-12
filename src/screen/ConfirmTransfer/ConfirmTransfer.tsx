import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './style';
import { useBalance } from '../../contexts/BalanceContext';
import { LinearGradient } from 'expo-linear-gradient';

export function PaymentMethodScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { amount, name } = route.params as { amount: string, name: string };

  const [selectedOption, setSelectedOption] = useState<'saldo' | 'limite'>('saldo');

  const saldoNeon = 0.0;
  const limiteCartao = -1942.63;
  const valorTransacao = parseFloat(amount.replace(',', '.'));

  const saldoInsuficiente = selectedOption === 'saldo' && saldoNeon < valorTransacao;
  const { balance } = useBalance();
  const saldoFormatado = balance;

  const formatCurrencyParts = (value: string) => {
    const [reais, centavos] = value.split(',');
    return { reais, centavos };
  };

  const { reais, centavos } = formatCurrencyParts(amount);

  return (
    <LinearGradient
      colors={['#FFD54F', '#FFF176']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Como pagar?</Text>
        </View>

        <Text style={styles.amount}>
          R$ {reais}
          <Text style={styles.cents}>,{centavos}</Text>
        </Text>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => setSelectedOption('saldo')}
          >
            <Ionicons
              name={selectedOption === 'saldo' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#000"
            />
            <Text style={styles.optionTitle}>Saldo PlayBank</Text>
            <Text style={styles.optionValue}>R$ {saldoFormatado}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => setSelectedOption('limite')}
          >
            <Ionicons
              name={selectedOption === 'limite' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#000"
            />
            <Text style={styles.optionTitle}>Limite do cartão</Text>
            <Text style={styles.optionValue}>R$ 1.942,63</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            navigation.navigate('ReviewPix', {
              amount,
              name,
              PaymentMethod: selectedOption,
            });
          }}
        >
          <Text style={styles.buttonText}>Confirmar transferência</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
