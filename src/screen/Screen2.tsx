import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Screen2 = ({ route }: any) => {
  const { data } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagen 2</Text>
      <Image
        source={{ uri: 'https://img.freepik.com/foto-gratis/concepto-marketing-redes-sociales-marketing-aplicaciones_23-2150063163.jpg' }}
        style={styles.image}
      />
      <Text style={styles.data}>{data}</Text> 
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
    marginBottom: 20,
  },
  data: {
    fontSize: 18,
    color: '#333',
  },
});

export default Screen2;
