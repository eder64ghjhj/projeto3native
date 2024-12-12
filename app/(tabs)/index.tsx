import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://i.pinimg.com/originals/5d/88/b4/5d88b49c38e18704615a0051a1e81ef7.png' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Boneco miniatura Itachi Uchiha</Text>
      <Text style={styles.productPrice}>R$ 99,99</Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#708090',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#00BFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
});
