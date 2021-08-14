import React from 'react';
import * as firebase from 'firebase';

import firebaseConfig from '../../../firebase.config';

export const configFirebase = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}

export const signOutRequest = async () => {
    await firebase.auth().signOut();
}

export const loginRequest = (email, password) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
}

export const registerRequest = (email, password) => {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
}
