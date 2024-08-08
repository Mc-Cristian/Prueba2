import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }: any) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeTitle}>Bienvenido</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1')}
      >
        <Text style={styles.buttonText}>Imagen 1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen2', { data: 'someData' })}
      >
        <Text style={styles.buttonText}>Imagen 2</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.buttonText}> {'>='} </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen4')}
      >
        <Text style={styles.buttonText}>{'<='}</Text>
      </TouchableOpacity>
      

    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aeeeee',
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagen: {
    width: 300,
    height: 300,
  },
});

export default Screen1;
