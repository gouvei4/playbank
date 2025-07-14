import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PresentationScreen from './src/screen/Presentation';
import LoginScreen from './src/screen/Login/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/DrawMenu/DrawMenu';
import PixScreen from './src/screen/PixScreen/PixScreen';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import PixKeyInputScreen from './src/components/PixKeyInput/PixKeyInputScreen';
import { TransferScreen } from './src/screen/TransferScreen/Transfer';
import { PaymentMethodScreen } from './src/screen/ConfirmTransfer/ConfirmTransfer';
import { BalanceProvider } from './src/contexts/BalanceContext';
import ReviewPixScreen from './src/screen/ReviewPixScreen/ReviewPix';
import PixSuccessScreen from './src/screen/PixSuccessScreen/PixSuccessScreen';
import ComprovantePixScreen from './src/screen/ComprovantePixScreen/ComprovantePix';
import ProfileScreen from './src/screen/ProfileScreen/ProfileScreen';
import LoadingExitScreen from './src/screen/ExitScreen/LoadingExitScreen';
import AccountChatFlow from './src/screen/AccountChat/AccountChatFlow';
import QRCodeScannerScreen from './src/screen/QrCodeScreen/QRCodeScannerScreen';
import ConfirmPaymentScreen from './src/screen/ConfirmPaymentScreen/ConfirmPayment';
import PixConfirmationScreen from './src/screen/ConfirmPaymentScreen/ConfirmPayment';
import CofrinhosScreen from './src/screen/CofrinhosScreen/CofrinhosScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Presentation');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.duration(1000)} style={styles.logoContainer}>
        <Text style={styles.play}>Play</Text>
        <Text style={styles.bank}>Bank</Text>
      </Animated.View>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />
    </View>
  );
}

function HomeWithDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <BalanceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Presentation" component={PresentationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeDrawer" component={HomeWithDrawer} />
          <Stack.Screen name="PixScreen" component={PixScreen} />
          <Stack.Screen name="PixKeyInput" component={PixKeyInputScreen} />
          <Stack.Screen name="TransferScreen" component={TransferScreen} />
          <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
          <Stack.Screen name="ReviewPix" component={ReviewPixScreen} />
          <Stack.Screen name="PixSuccessScreen" component={PixSuccessScreen} />
          <Stack.Screen name="ComprovantePixScreen" component={ComprovantePixScreen} />
           <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
           <Stack.Screen name="LoadingExit" component={LoadingExitScreen} />
           <Stack.Screen name="AccountChat" component={AccountChatFlow} />
           <Stack.Screen name="LerQrdCode" component={QRCodeScannerScreen} />
           <Stack.Screen name="ConfirmPayment" component={ConfirmPaymentScreen} />
           <Stack.Screen name="PixConfirmation" component={PixConfirmationScreen} />
           <Stack.Screen name="Cofrinhos" component={CofrinhosScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </BalanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  play: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'yellow',
    fontFamily: Platform.select({ ios: 'Helvetica Neue', android: 'Roboto' }),
  },
  bank: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -10,
    marginLeft: 64,
    fontFamily: Platform.select({ ios: 'Helvetica Neue', android: 'Roboto' }),
  },
});
