import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../screens/TestScreen';
import Splash from '../screens/Splash';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [splash, setsplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 1000);
  }, []);

  if (splash) {
    return <Splash />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.testScreen} component={TestScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;

const Routes = {
  testScreen: 'testScreen',
};
