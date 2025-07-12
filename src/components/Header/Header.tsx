import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { styles } from './style';

export function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
        </Pressable>
        <Text style={styles.headerText}>Olá, Afonso</Text>
      </View>
      <Pressable style={styles.helpButton}>
        <Text style={styles.helpText}>Ajuda</Text>
      </Pressable>
    </View>
  );
}
