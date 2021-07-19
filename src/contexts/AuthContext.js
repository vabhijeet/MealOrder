import React, { useContext,useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';


const AuthContext= React.createContext();
export const useAuth=()=>useContext(AuthContext);

export const AuthProvider=({ children })=>{
    const[loding,setLoding]=useState(true);
    const[user,setUser]=useState(null);
    const history=useHistory();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoding(false);
            if(user) history.push('/home');
        })
    },[user,history])
    const value={ user };
    return (
        <AuthContext.Provider value={value}>
            {!loding && children}
        </AuthContext.Provider>
    )
}