import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ReviewPixScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const { amount, paymentMethod } = route.params as {
    amount: string;
    paymentMethod: 'saldo' | 'limite';
  };

  const handlePix = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('PixSuccessScreen', { amount });
    }, 3000);
  };

  return (
    <LinearGradient
      colors={['#FFD54F', '#FFF176']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Revise os dados do seu Pix</Text>
        </View>

        <ScrollView style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.name}>Fred Bueno</Text>
            <Text style={styles.detail}>CPF: ***.111.111-**</Text>
            <Text style={styles.detail}>Pix para Nu Pagamentos S.A.</Text>
            <Text style={styles.detail}>Agência: 1</Text>
            <Text style={styles.detail}>Conta: 111111111</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Valor a enviar</Text>
            <View style={styles.row}>
              <Text style={styles.value}>R$ {amount}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('TransferScreen')}>
                <Text style={styles.link}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Meio de pagamento</Text>
            <View style={styles.row}>
              <Text style={styles.value}>
                {paymentMethod === 'saldo' ? 'Saldo em conta' : 'Limite do cartão'}
              </Text>
              <TouchableOpacity>
                <Text style={styles.link}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          disabled={loading}
          onPress={handlePix}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Enviando Pix...' : 'Fazer Pix'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
