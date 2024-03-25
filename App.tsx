import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {colors} from './src/utils/colors';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />
        <AppStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
