import React, {useState, useContext} from 'react';
import { View} from 'react-native';

import {RestaurantsContext} from '../../../../services/restaurants/restaurants.context';
import {FavoritesContext} from '../../../../services/favorites/favorites.context';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import Loader from '../../../../components/loader/loader.component';
import Search from '../../components/search/search.component';
import FavoritesBar from '../../../../components/favorites-bar/favorites-bar.component';
import RestaurantsList from '../../../../components/restaurant/restanrants-list/restanrants-list.component';

const RestaurantsScreen = ({navigation}) => {
    const {favorites} = useContext(FavoritesContext);
    const {restaurants, error, isLoading} = useContext(RestaurantsContext);
    const [isToggled, setIsToggled] = useState(false);
    if(isLoading){
        return (
            <SafeArea>
                <Loader />
            </SafeArea>
        )
    }
    return (
        <SafeArea>
            <Search onFavoritesToggle={() => setIsToggled(!isToggled)} isFavoritesToggle={isToggled} />
            { isToggled &&
                <FavoritesBar restaurants={favorites} onNavigate={navigation.navigate}/>
            }
            <RestaurantsList
                restaurants={restaurants}
                navigation={navigation}
            />
        </SafeArea>
    )
}

export default RestaurantsScreen;
