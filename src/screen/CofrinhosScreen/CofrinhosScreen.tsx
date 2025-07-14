import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const piggyBanks = [
  { id: 1, name: 'Viagem', value: 500, icon: 'https://img.icons8.com/fluency/48/suitcase.png' },
  { id: 2, name: 'Emergências', value: 300, icon: 'https://img.icons8.com/fluency/48/first-aid-kit.png' },
  { id: 3, name: 'Novo Celular', value: 150, icon: 'https://img.icons8.com/fluency/48/smartphone.png' },
];

export default function CofrinhosScreen() {
  const navigation = useNavigation();
  const [total, setTotal] = useState(950);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Simulação de um pequeno rendimento no total ao atualizar
    setTotal((prev) => prev + prev * 0.0015);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <LinearGradient
      colors={['#FFD600', '#FFFFFF']}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 52 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Cofrinhos</Text>

          <View style={{ width: 200 }} />
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalTitle}>Total Guardado</Text>
          <Text style={styles.totalAmount}>
            R$ {total.toFixed(2).replace('.', ',')}
          </Text>
          <Text style={styles.cdi}>Rendimento: 115% CDI 🔥</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Criar')}>
              <Ionicons name="add-circle-outline" size={26} color="#333" />
              <Text>Criar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Depositar')}>
              <Ionicons name="download-outline" size={26} color="#333" />
              <Text>Depositar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Retirar')}>
              <Ionicons name="arrow-up-outline" size={26} color="#333" />
              <Text>Retirar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.piggyContainer}>
          <Text style={styles.sectionTitle}>Meus Cofrinhos</Text>
          {piggyBanks.map((piggy) => (
            <View key={piggy.id} style={styles.piggyItem}>
              <Image source={{ uri: piggy.icon }} style={styles.piggyIcon} />
              <Text style={styles.piggyName}>{piggy.name}</Text>
              <Text style={styles.piggyValue}>R$ {piggy.value.toFixed(2).replace('.', ',')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tipContainer}>
          <Text style={styles.tipTitle}>💡 Dica</Text>
          <Text style={styles.tipText}>
            Automatize reservas para guardar dinheiro toda vez que gastar!
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
