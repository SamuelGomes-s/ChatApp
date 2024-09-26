import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AreaInput, Background, Input, Slogan, SubmitButton, SubmitText, TitleApp } from './styles';



export default function SignIn() {
  const [type, setType] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


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
      <SubmitButton>
        <SubmitText>   {type ? ' Cadastrar ' : 'Acessar'} </SubmitText>
      </SubmitButton>

      <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} onPress={() => setType(!type)}>
        <Text style={{ color: '#000' }}>
          {type ? ' Já possuo uma conta' : 'Criar uma nova conta'}
        </Text>
      </TouchableOpacity>

    </Background>)
}
