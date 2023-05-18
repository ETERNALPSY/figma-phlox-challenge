import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUser from '../services/getUser'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [token,setToken] = useState("")
    const [invalidUser, setInvalidUser] = useState(false)
    const navigate = useNavigate()

    const signIn = async (name,password) => {
        //podriamos recibir credenciales y hacer una petion post
    // nos puede mandar a otra pagina
        const response = await getUser(name,password)
        if(response){
            setIsAuth(true)
            setToken(response.token)
            navigate('/')
        }else {
            navigate('/login')
            setInvalidUser(true)
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
                token,
                invalidUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}