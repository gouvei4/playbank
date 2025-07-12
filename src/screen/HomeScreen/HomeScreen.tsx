import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BalanceCard } from '../../components/BalanceCard/BalanceCard';
import { useNavigation } from '@react-navigation/native';
import { QuickActionsCard } from '../../components/QuickAction/QuickActionCard';
import { Header } from '../../components/Header/Header';
import { LoanCard } from '../../components/LoanCard/LoanCard';
import {styles} from './style';
import CardSlider from '../../components/CardSlider/CardSlider';

export default function HomeScreen() {
  const [showBalance, setShowBalance] = useState(false);
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#FFD700', '#FFFFFF']} style={styles.container}>
      <ScrollView style={styles.container}>
        <Header />
        <BalanceCard
          showBalance={showBalance}
          toggleBalance={() => setShowBalance(!showBalance)}
          onPixPress={() => navigation.navigate('PixScreen')}
          onQrCode={() => navigation.navigate('LerQrdCode')}
        />
        <QuickActionsCard />
        <LoanCard />
        <CardSlider />
      </ScrollView>
    </LinearGradient>
  );
}
