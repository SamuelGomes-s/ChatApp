
import React, { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";




export const Context = createContext()

export default function ContextProvider({ children }) {
    const [user, setUser] = useState({})
    const navigation = useNavigation()
    const [type, setType] = useState(false)

    useEffect(() => {

    }, [])


    function handleSignOut() {

        auth().signOut().then(() => {

        }).catch((error) => { console.log(error) })
    }

    function handleUserLogin(type, email, name, password) {

        console.log('deu')
        if (type) {
            //Cadastrar 
            if (name === '' || email === '' || password === '') {
                alert("Preencha todos os campos!")
                return
            }

            auth().createUserWithEmailAndPassword(email, password).then((user) => {
                user.user.updateProfile({
                    displayName: name // atualizando nome
                }).then( async () => {
                    try {
                        // await AsyncStorage.setItem('@user', JSON.stringify(userData))

                    } catch (error) {
                        console.log(error)
                    }
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
        <Context.Provider value={{ handleUserLogin, type, setType }}>
            {children}
        </Context.Provider>
    )
}