import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';

export default function PixSuccessScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { amount = '0,18' } = route.params || {};
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR');

  return (
    <LinearGradient
          colors={['#FFD54F', '#FFF176']}
          style={styles.gradientContainer}
        >
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.navigate('HomeDrawer')}
      >
        <Ionicons name="close" size={26} color="#333" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Você enviou Pix para</Text>
        <Text style={styles.name}>Fred Bueno!</Text>

        <Image
          source={require('../../../assets/cash-unscreen.gif')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.infoBox}>
          <Ionicons name="cash-outline" size={22} color="#333" />
          <View style={styles.infoText}>
            <Text style={styles.amount}>Valor transferido de R$ {amount}</Text>
            <Text style={styles.scheduled}>Transferido em {formattedDate}, usando saldo.</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
            navigation.navigate('TransferScreen')}}>
          <Text style={styles.buttonPrimaryText}>Enviar outro Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}
        onPress={() => {
          navigation.navigate('ComprovantePixScreen', {
            amount,
            name: 'Fred Bueno',
            paymentMethod: 'Saldo',
          })
        }}
        >
          <Text style={styles.buttonSecondaryText}>Ver comprovante</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}
