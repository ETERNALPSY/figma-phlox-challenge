import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUser from '../services/getUser'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [token,setToken] = useState("")
    const navigate = useNavigate()

    const signIn = async (name,password) => {
        //podriamos recibir credenciales y hacer una petion post
    // nos puede mandar a otra pagina
        const response = await getUser(name,password)
        if(response.token){
            setIsAuth(true)
            setToken(response.token)
            navigate('/')
        }
        
    }

    const signOut = () => {
        setIsAuth(false)
        navigate('/')
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                signIn,
                signOut,
                token
            }}>
            {children}
        </AuthContext.Provider>
    )
}