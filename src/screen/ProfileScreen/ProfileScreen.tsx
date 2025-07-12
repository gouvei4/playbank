import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const renderItem = (title: string, description: string, icon: any) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      if (title === 'Sair') {
        navigation.navigate('LoadingExit');
      }
    }}
  >
    <View style={styles.iconText}>
      <Ionicons name={icon} size={22} color="#000" />
      <View style={styles.textGroup}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDesc}>{description}</Text>
      </View>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#aaa" />
  </TouchableOpacity>
);


  return (
    <LinearGradient
      colors={['#FFD700', '#FFF176']}
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.profile}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>Afonso Gouveia</Text>
            <Text style={styles.email}>afonso.gouveia@gmail.com</Text>
            <View style={styles.accountInfo}>
              <Text style={styles.accountText}>
                Agência: <Text style={styles.accountValue}>1111</Text>
              </Text>
              <Text style={styles.accountText}>
                Conta: <Text style={styles.accountValue}>11111111-1</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          {renderItem('Ajuda', 'Central de atendimento e suporte', 'help-circle')}
          {renderItem('Editar perfil', 'Atualize suas informações pessoais', 'create')}
          {renderItem('Configurações', 'Notificações, segurança e mais', 'settings')}
          {renderItem('Limites', 'Limites de transferências e pagamentos', 'speedometer')}
          {renderItem('Sobre', 'Informações sobre o aplicativo', 'information-circle')}
          {renderItem('Sair', 'Encerrar sua sessão atual', 'log-out')}
        </View>

        <TouchableOpacity style={styles.cancelContainer}>
          <Text style={styles.cancelText}>
            Você pode fechar sua conta <Text style={styles.cancelLink}>clicando aqui</Text> .
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
