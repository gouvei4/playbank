import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from './style';
import { useBalance } from '../../contexts/BalanceContext';

type Props = {
  onPixPress: () => void;
  onQrCode: () => void;
  onCofrinhos: () => void;
};

export function BalanceCard({ onPixPress, onQrCode, onCofrinhos }: Props) {
  const { balance, showBalance, toggleBalance } = useBalance();

  const data = [
    { label: 'Pix', icon: 'pix' },
    { label: 'Ler QR Code', icon: 'qrcode' },
    { label: 'Cofrinhos', icon: 'piggy-bank' },
    { label: 'Investir', icon: 'money-bill-wave' },
  ];

  const handlePress = (label: string) => {
    if (label === 'Pix') onPixPress();
    else if (label === 'Ler QR Code') onQrCode();
    else if (label === 'Cofrinhos') onCofrinhos();

  };

  return (
    <View style={styles.balanceCard}>
      <View style={styles.balanceTop}>
        <View>
          <View style={styles.saldoRow}>
            <Text style={styles.textTitle}>Saldo</Text>
            <View style={styles.cdiContainer}>
              <MaterialCommunityIcons name="arrow-up-bold" size={12} color="#00C77E" />
              <Text style={styles.cdiText}>Rende 105% do CDI</Text>
            </View>
          </View>
          <Text style={styles.balanceText}>
            R$ {showBalance ? balance : '******'}
          </Text>
        </View>
        <Pressable onPress={toggleBalance}>
          <MaterialCommunityIcons name={showBalance ? 'eye-off' : 'eye'} size={24} color="#000" />
        </Pressable>
      </View>

      <View style={styles.balanceActions}>
        {data.map(({ label, icon }) => (
          <Pressable
            key={label}
            style={styles.actionButton}
            onPress={() => handlePress(label)}
          >
            <View style={styles.balanceIconPlaceholder}>
              <FontAwesome6 name={icon as any} size={24} color="#000" />
            </View>
            <Text style={styles.actionText}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
