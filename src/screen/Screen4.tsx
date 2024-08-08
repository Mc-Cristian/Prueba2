import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Screen4 = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handlePress = () => {
    // Convert input values to numbers
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(Math.max(n1, n2));
    } else {
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Campo 1"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Campo 2"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}> {'>='}</Text>
      </TouchableOpacity>

      {result !== null && (
        <Text style={styles.result}>Número mayor o igual: {result}</Text>
      )}
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
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 18,
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
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default Screen4;
