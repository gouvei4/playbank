import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface CardProps {
  title: string;
  description: string;
  image: any;
}

const cards: CardProps[] = [
  {
    title: 'Quer ter mais limite no cartão?',
    description: 'Compartilhe seus dados e aumente suas chances de ter mais limite',
    image: require('../../../assets/people-cart.jpg'),
  },
  {
    title: 'Guarde seu dinheiro a 150% do CDI.',
    description: 'Com a mesma segurança da poupança. Aproveite esta oportunidade exclusiva',
    image: require('../../../assets/cofre.jpg'),
  },
];

export default function CardSlider() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      style={styles.container}
    >
      {cards.map((card, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={card.image} style={styles.image} resizeMode="cover" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
