import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Share,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { styles } from './style';

export default function ComprovantePixScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    amount = '0,00',
    name = 'Fred Bueno',
    paymentMethod = 'saldo',
  } = route.params ?? {};

  const { reais, centavos } = formatCurrencyParts(amount);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR');
  const formattedTime = currentDate.toLocaleTimeString('pt-BR');
  const transactionId = generateTransactionId();

  const handleShare = async () => {
    const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #222; }
          .logo { display: flex; align-items: baseline; margin-bottom: 10px; }
          .play { font-size: 28px; font-weight: bold; color: #000; margin-right: 4px; }
          .bank { font-size: 24px; font-weight: bold; color: #000; }
          h1 { font-size: 20px; color: #000; margin: 0 0 10px 0; }
          .section { margin-top: 20px; }
          .label { font-weight: bold; margin-top: 12px; font-size: 14px; }
          .value { font-size: 16px; margin-bottom: 4px; }
          .footer { margin-top: 40px; font-size: 11px; color: #666; border-top: 1px solid #ccc; padding-top: 10px; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class=\"logo\">
          <div class=\"play\">PLAY</div>
          <div class=\"bank\">BANK</div>
        </div>
        <h1>Comprovante de Pix</h1>
        <div class=\"value\">${formattedDate} - ${formattedTime}</div>
        <div class=\"section\">
          <div class=\"label\">Valor</div>
          <div class=\"value\">R$ ${amount}</div>
        </div>
        <div class=\"section\">
          <div class=\"label\">Para</div>
          <div class=\"value\">${name}</div>
          <div class=\"value\">***.123.456-**</div>
          <div class=\"value\">Banco PlayBank</div>
        </div>
        <div class=\"section\">
          <div class=\"label\">De</div>
          <div class=\"value\">Afonso</div>
          <div class=\"value\">***.345.678-**</div>
          <div class=\"value\">${paymentMethod === 'saldo' ? 'Saldo em conta' : 'Limite do cartão'}</div>
        </div>
        <div class=\"section\">
          <div class=\"label\">ID da transação</div>
          <div class=\"value\">${transactionId}</div>
        </div>
        <div class=\"footer\">
          <div>
            PlayBank Instituição de Pagamento S.A<br/>
            CNPJ nº 00.000.000/0001-00
          </div>
          <div>
            SAC: 0800 111 2222<br/>
            Ouvidoria: 0800 333 4444<br/>
            suporte.playbank.com
          </div>
        </div>
      </body>
    </html>
  `;

    const { uri } = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
  <Image source={require('../../../assets/ok.png')} style={{ width: 120, height: 120 }} />
  <Text style={styles.successText}>Pix enviado com sucesso!</Text>
  <Text style={styles.amount}>
    R$ {reais}
    <Text style={styles.cents}>,{centavos}</Text>
  </Text>
  <View style={styles.infoBox}>
    <InfoRow label="Para" value={name} />
    <InfoRow label="Método de pagamento" value={paymentMethod === 'saldo' ? 'Saldo em conta' : 'Limite do cartão'} />
    <InfoRow label="Data" value={`${formattedDate} às ${formattedTime}`} />
    <InfoRow label="ID da transação" value={transactionId} />
  </View>

  <View style={styles.buttonGroup}>
    <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
      <Ionicons name="share-outline" size={20} color="#fff" />
      <Text style={styles.shareButtonText}>Compartilhar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('HomeDrawer')}>
      <Text style={styles.secondaryButtonText}>Voltar ao início</Text>
    </TouchableOpacity>
  </View>
</View>

    </SafeAreaView>
  );
}

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const formatCurrencyParts = (value) => {
  const [reais, centavos] = value.split(',');
  return { reais, centavos };
};

const generateTransactionId = () => 'PX-' + Math.floor(100000000 + Math.random() * 900000000);
