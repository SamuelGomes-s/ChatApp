
import React, { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";




export const Context = createContext()

export default function ContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const navigation = useNavigation()
    const [type, setType] = useState(false)

    function handleHasUser() {
        const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null

        if (hasUser !== null) {
            setUser(hasUser)
        }

    }

    function handleSignOut() {

        auth().signOut().then(() => {
            setUser(null)
        }).catch((error) => { console.log(error) })
    }

    function handleUserLogin(type, email, name, password) {

        console.log('deu')
        if (type) {
            //Cadastrar 
            if (name === '' || email === '' || password === '') {
                alert("Preencha todos os campos!")
                returnF
            }

            auth().createUserWithEmailAndPassword(email, password).then((user) => {
                user.user.updateProfile({
                    displayName: name // atualizando nome
                }).then(async () => {
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
        <Context.Provider value={{ handleUserLogin, type, setType, handleSignOut, handleHasUser, user }}>
            {children}
        </Context.Provider>
    )
}