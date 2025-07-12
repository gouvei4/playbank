import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

export default function PixKeyInputScreen() {
  const navigation = useNavigation();
  const [pixKey, setPixKey] = useState('');

  const handleQRCodeScan = () => {
    Alert.alert('Abrir câmera para ler QR Code');
  };

  const handleConfirm = () => {
    if (!pixKey.trim()) {
      Alert.alert('Erro', 'Insira uma chave Pix válida');
      return;
    }
    navigation.navigate('TransferScreen', { pixKey });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={['#FFD700', '#FFFFFF']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientBackground}
        >
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('PixScreen')}
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>Insira a chave para fazer o Pix</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Chave Pix"
                value={pixKey}
                onChangeText={setPixKey}
                placeholderTextColor="#999"
              />
              <TouchableOpacity onPress={handleQRCodeScan}>
                <Ionicons name="qr-code-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
