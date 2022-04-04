import React from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<any | null>(null);

function AuthContextProvider(props: any) {
  const {children} = props;

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
