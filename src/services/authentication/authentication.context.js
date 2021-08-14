import React, {useEffect, useState, createContext} from 'react';
import * as firebase from 'firebase';

import {loginRequest, signOutRequest, registerRequest, configFirebase} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        configFirebase();
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                setUser(usr);
            }
            setIsLoading(false);
        });
    }, []);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
        .then((u) => {
            setUser(u);
            setIsLoading(false);
        })
        .catch((e) => {
            setError(e.toString());
            setIsLoading(false);
        })
    }

    const onRegister = (email, password, confirmPassword) => {
        if(password !== confirmPassword){
            setError('Error: the passwords do not match');
            return;
        }
        setIsLoading(true);
        registerRequest(email, password)
        .then((u) => {
            setUser(u);
            setIsLoading(false);
        })
        .catch((e) => {
            setError(e.toString());
            setIsLoading(false);
        })
    }

    const onSignOut = () => {
        setIsLoading(true);
        signOutRequest();
        setUser(null);
        setIsLoading(false);
    }


    return (
        <AuthenticationContext.Provider
            value = {{
                isLoading,
                error,
                user,
                onLogin,
                onRegister,
                onSignOut,
                isAuthenticated: !!user
            }}
            >
            {children}
        </AuthenticationContext.Provider>
    )
}
