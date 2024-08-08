import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {'>='}</Text>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1301455711/es/vector/smartphone-con-iconos-de-aplicaciones.jpg?s=612x612&w=0&k=20&c=cEvxVKHAp1mVOHJkyHitlaVUR66DQIh08JiH7h5IOgU=' }} 
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
});

export default Screen3;
