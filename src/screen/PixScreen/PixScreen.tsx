import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

export default function PixScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#FFD700', '#FFFFFF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeDrawer')} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Área Pix</Text>
        </View>

        <View style={styles.iconRow}>
          <PixButton
            icon="arrow-up-circle"
            label="Transferir"
            onPress={() => navigation.navigate('PixKeyInput')}
          />
          <PixButton icon="qr-code-outline" label="Pagar com QR" />
          <PixButton icon="copy-outline" label="Pix Copia e Cola" />
          <PixButton icon="qr-code" label="Cobrar com QR" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Minhas chaves</Text>
          <View style={styles.keyRow}>
            <Ionicons name="key-outline" size={20} color="#666" />
            <Text style={styles.keyText}>c27f99db-ece5...</Text>
            <TouchableOpacity>
              <Ionicons name="copy-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.link}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Segurança</Text>
          <View style={styles.limitRow}>
            <View style={styles.limitBox}>
              <Text style={styles.limitBadge}>MAIS LIMITE</Text>
              <MaterialIcons name="verified-user" size={24} color="#000" />
              <Text style={styles.limitLabel}>Contatos seguros</Text>
              <Text style={styles.limitDesc}>Cadastre para ter limites exclusivos</Text>
            </View>

            <View style={styles.limitBox}>
              <Ionicons name="sunny-outline" size={24} color="#000" />
              <Text style={styles.limitLabel}>R$ 50.000</Text>
              <Text style={styles.limitDesc}>Limite diurno</Text>
            </View>

            <View style={styles.limitBox}>
              <Ionicons name="moon-outline" size={24} color="#000" />
              <Text style={styles.limitLabel}>R$ 1.000</Text>
              <Text style={styles.limitDesc}>Limite noturno</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mais opções</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Histórico de transações</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Perguntas frequentes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

function PixButton({
  icon,
  label,
  isNew = false,
  onPress,
}: {
  icon: any;
  label: string;
  isNew?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={22} color="#000" />
      </View>
      <Text style={styles.buttonLabel}>{label}</Text>
      {isNew && <Text style={styles.newBadge}>NOVO</Text>}
    </TouchableOpacity>
  );
}
