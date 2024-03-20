import { Children, createContext, useContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
    const storeToken = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    return (
        <AuthContext.Provider value={storeToken}>
            {Children}
        </AuthContext.Provider>
    )
}


export const useAuth=()=>{
    const authContextvalue=  useContext(AuthContext);
    if(!authContextvalue){
        throw new Error('useAuth used outside of the provider')
    }
}