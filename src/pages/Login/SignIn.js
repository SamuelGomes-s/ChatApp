import React, { useState } from 'react';
import { Keyboard, Text, TouchableOpacity } from 'react-native';
import { AreaInput, Background, Input, Slogan, SubmitButton, SubmitText, TitleApp } from './styles';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



export default function SignIn() {
  const [type, setType] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  function handleLogin() {
    Keyboard.dismiss()
    if (type) {
      //Cadastrar 
      if (name === '' || email === '' || password === '') {
        alert("Preencha todos os campos!")
        return
      }

      auth().createUserWithEmailAndPassword(email, password).then((user) => {
        user.user.updateProfile({
          displayName: name // atualizando nome
        }).then(() => {
          navigation.goBack()
        })
      }).catch((error) => { console.log(error) })

    } else {
      //logar
      auth().signInWithEmailAndPassword(email, password).then(() => { 
        navigation.goBack()
      }).catch((error) => { console.log(error) })

    }
  }





  return (
    <Background>
      <TitleApp> HeyGrupos </TitleApp>
      <Slogan> Ajude, colabore, faça networking! </Slogan>

      {type && <AreaInput>
        <Input
          placeholder='Nome'
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </AreaInput>}
      <AreaInput>

        <Input
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </AreaInput>
      <AreaInput>
        <Input
          placeholder='Senha'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </AreaInput>
      <SubmitButton onPress={handleLogin}>
        <SubmitText>   {type ? ' Cadastrar ' : 'Acessar'} </SubmitText>
      </SubmitButton>

      <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} onPress={() => setType(!type)}>
        <Text style={{ color: '#000' }}>
          {type ? ' Já possuo uma conta' : 'Criar uma nova conta'}
        </Text>
      </TouchableOpacity>

    </Background>)
}
