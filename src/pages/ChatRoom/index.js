import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';



export default function ChatRoom() {
const navigation = useNavigation()
  return (
    <View>
      <Text> ChatRoom</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
        <Text> ir pra outra tela</Text>
      </TouchableOpacity>
    </View>
  )
}