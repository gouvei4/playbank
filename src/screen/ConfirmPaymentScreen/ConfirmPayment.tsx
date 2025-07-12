import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

export default function PixConfirmationScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Confirmação de pagamento</Text>
        </View>

        <Text style={styles.amount}>R$ 200,90</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Beneficiário</Text>
          <Text style={styles.value}>FRED BUENO</Text>
          <Text style={styles.subValue}>CPF 111.111.111-11</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Banco do destinatário</Text>
          <Text style={styles.value}>Banco Santander (Brasil) S.A.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Vencimento</Text>
          <Text style={styles.value}>14/07/2025</Text>

          <Text style={styles.label}>Data limite para pagamento</Text>
          <Text style={styles.value}>12/08/2025</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Pagador</Text>
          <Text style={styles.value}>Afonso G B</Text>
          <Text style={styles.subValue}>CPF 111.111.111-XX</Text>
        </View>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar pagamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleButtonText}>Agendar pagamento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
