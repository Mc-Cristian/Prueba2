import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';
import Screen3 from './src/screen/Screen3';
import Screen4 from './src/screen/Screen4';





const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Imagen 1 ' }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Imagen 2' }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ title: '>=' }} />
        <Stack.Screen name="Screen4" component={Screen4} options={{ title: '<=' }} />

  

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
