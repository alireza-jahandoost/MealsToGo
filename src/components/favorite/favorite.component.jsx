import React, {useContext} from 'react';
import {AntDesign} from '@expo/vector-icons';

import {FavoritesContext} from '../../services/favorites/favorites.context';
import {
    FavoriteButton,
} from './favorite.styles';

const Favorite = ({restaurant}) => {
    const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoritesContext);

    const isFavorite = favorites.find((current) => current.placeId === restaurant.placeId);

    return (
        <FavoriteButton
            onPress={() => isFavorite ?
                removeFromFavorites(restaurant) :
                addToFavorites(restaurant)
            }
        >
            <AntDesign
                name={ isFavorite ? 'heart' : 'hearto'}
                size={24}
                color={ isFavorite ? 'red' : 'white'}
            />
        </FavoriteButton>
    )

}

export default Favorite;
