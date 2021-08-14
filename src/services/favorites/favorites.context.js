import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthenticationContext} from '../authentication/authentication.context';

const storeFavorites = async (value, uid) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(`@favorite-restaurants-${uid}`, jsonValue)
  } catch (e) {
      console.error(e);
  }
}




export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    const {user} = useContext(AuthenticationContext);

    const loadFavorites = async (uid) => {
      try {
        const jsonValue = await AsyncStorage.getItem(`@favorite-restaurants-${uid}`)
        if(jsonValue !== null){
            setFavorites(JSON.parse(jsonValue));
        }
      } catch(e) {
          console.error(e);
      }
    }

    useEffect(() => {
        if(user){
            loadFavorites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if(user){
            storeFavorites(favorites, user.uid);
        }
    }, [favorites, user]);

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }

    const remove = (restaurant) => {
        setFavorites(favorites.filter((favorite) => favorite.placeId !== restaurant.placeId));
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
