import {createContext} from 'react';

export type AuthContextType = {
    isLoggedIn: boolean,
    token?: string,
    login: Function,
    logout: Function
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    token: undefined,
    login: ()=>{},
    logout: ()=>{}
})