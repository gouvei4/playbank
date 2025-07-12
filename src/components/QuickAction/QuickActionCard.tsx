import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

export function QuickActionsCard() {
  return (
    <View style={styles.quickActions}>
      <View style={styles.cardTextGroup}>
        <Text style={styles.textCart}>Segurança, praticidade e vantagens exclusivas</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Solicite já seu cartão</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../../assets/empre.jpg')}
        style={styles.cardImage}
        resizeMode="cover"
      />
    </View>
  );
}
