import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from './style';

export function LoanCard() {
  return (
    <TouchableOpacity
      style={styles.loanContainer}
      onPress={() => console.log('Navegar para tela de empréstimo')}
      activeOpacity={0.9}
    >
      <View style={styles.cardTextGroup}>
        <View style={styles.textWithIcon}>
          <FontAwesome6 name="hand-holding-dollar" size={28} color="#000" style={styles.loanIcon} />
          <Text style={styles.textCartEmpre}>Empréstimos</Text>
        </View>

        <Text style={styles.subTitle}>
          Até <Text style={styles.valor}>R$10.000,00</Text> disponíveis para você usar
        </Text>

        <Text style={styles.taxText}>
          Taxa a partir de <Text style={styles.valor}>1,79% a.m.</Text>
        </Text>

        <View style={styles.simulationBox}>
          <Text style={styles.simulationValue}>R$10.000 em 12x de R$990</Text>
        </View>

        <TouchableOpacity style={styles.simularButton}>
          <Text style={styles.simularText}>Simular agora</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
