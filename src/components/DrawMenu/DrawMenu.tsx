import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import {
    User,
    Home,
    HelpCircle,
    DollarSign,
    FileText,
    PiggyBank,
    CreditCard,
    BarChart2,
    Gift,
    HandCoins,
    LogOut,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

export default function CustomDrawerContent(props: any) {
    const { navigation } = props;

    return (
        <LinearGradient
            colors={['#FFD700', '#FFFFFF']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ flex: 1 }}
        >
            <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.drawerHeader}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/100' }}
                        style={styles.userIconPlaceholder}
                    />
                    <Text style={styles.userName}>Afonso</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                        <Text style={styles.userSubtitle}>Seu perfil {'>'}</Text>
                    </TouchableOpacity>
                </View>

                <DrawerItem
                    label="Meu Perfil"
                    icon={() => <User color="black" size={24} />}
                    onPress={() => navigation.navigate('ProfileScreen')}
                />
                <DrawerItem label="Início" icon={({ size }) => <Home color="black" size={size} />} onPress={() => navigation.navigate('HomeScreen')} />
                <DrawerItem label="Ajuda" icon={({ size }) => <HelpCircle color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Cobrar" icon={({ size }) => <DollarSign color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Saldos e extratos" icon={({ size }) => <FileText color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Cofrinhos" icon={({ size }) => <PiggyBank color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Cartões" icon={({ size }) => <CreditCard color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Atividade" icon={({ size }) => <BarChart2 color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Convide e ganhe" icon={({ size }) => <Gift color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Empréstimos" icon={({ size }) => <HandCoins color="black" size={size} />} onPress={() => { }} />
                <DrawerItem label="Sair" icon={({ size }) => <LogOut color="black" size={size} />} onPress={() => { navigation.navigate('LoadingExit')}} />
            </DrawerContentScrollView>
        </LinearGradient>
    );
}
