import React, { useState } from 'react'

export const AuthContext = React.createContext();


const AuthContextProvider = ({children}) => {
    const[state, setState] = useState({
        isAuth: false,
        token:null
    })
    const loginUser = (token) => {
        setState({
            ...state,
            isAuth:true,
            token,
        })
    };
  return (
    <AuthContext.Provider value={{ authState: state,
    loginUser}}>
      
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
