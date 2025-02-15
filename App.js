import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import ContextProvider from './src/context/context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <StatusBar backgroundColor={'#216dfb'} barStyle={'light-content'} />
        <Routes />
      </ContextProvider>
    </NavigationContainer>
  )
}