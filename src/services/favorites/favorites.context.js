import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeFavorites = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@favorite-restaurants', jsonValue)
  } catch (e) {
      console.error(e);
  }
}




export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favorite-restaurants')
        if(jsonValue !== null){
            setFavorites(JSON.parse(jsonValue));
        }
      } catch(e) {
          console.error(e);
      }
    }

    useEffect(() => {
        loadFavorites();
    }, []);

    useEffect(() => {
        storeFavorites(favorites);
    }, [favorites]);

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
