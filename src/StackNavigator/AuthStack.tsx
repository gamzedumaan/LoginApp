import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { FIREBASE_AUTH } from '../../firebaseConfig';
import List from '../screens/List';
import LoginScreen from '../screens/LoginScreen';

const InsideStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator screenOptions={{ headerShown: false }}>
      <InsideStack.Screen name="My todos" component={List} />
    </InsideStack.Navigator>
  );
}

export default function AuthStack() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
