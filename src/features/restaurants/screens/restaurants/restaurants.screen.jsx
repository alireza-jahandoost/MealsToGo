import React, {useState, useContext} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';

import RestaurantInfoCard from '../../components/restaurant-info-card/restaurant-info-card.component';
import {RestaurantsContext} from '../../../../services/restaurants/restaurants.context';
import {FavoritesContext} from '../../../../services/favorites/favorites.context';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import Loader from '../../../../components/loader/loader.component';
import Search from '../../components/search/search.component';
import FavoritesBar from '../../../../components/favorites-bar/favorites-bar.component';

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
            <FlatList
                data={restaurants}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
                        <RestaurantInfoCard restaurant={item}/>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => String(item.name)}
                />
        </SafeArea>
    )
}

export default RestaurantsScreen;
