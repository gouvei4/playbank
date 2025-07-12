import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function QRCodeScannerScreen() {
  const navigation = useNavigation();
  const [facing, setFacing] = useState<CameraType>('back');
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionText}>Permitir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarCodeScanned = (result: BarcodeScanningResult) => {
    if (scanned) return;
    setScanned(true);

    const qrData = result?.data;
    
    if (qrData) {
      navigation.navigate('PixConfirmation', { qrData })
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'], 
        }}
        onBarcodeScanned={handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>

          <View style={styles.frame} />

          <Text style={styles.instruction}>Aponte a câmera para o QR Code de pagamento</Text>
          <TouchableOpacity style={styles.manualButton}>
            <Text style={styles.manualText}>Inserir o código manualmente</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const { width } = Dimensions.get('window');
const frameSize = width * 0.65;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  frame: {
    width: frameSize,
    height: frameSize,
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  instruction: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  manualButton: {
    marginTop: 20,
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  manualText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'center',
  },
  permissionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
