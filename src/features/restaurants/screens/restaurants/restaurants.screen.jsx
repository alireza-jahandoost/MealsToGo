import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';

import RestaurantInfoCard from '../../components/restaurant-info-card/restaurant-info-card.component';
import {RestaurantsContext} from '../../../../services/restaurants/restaurants.context';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import Loader from '../../../../components/loader/loader.component';
import Search from '../../components/search/search.component';

const RestaurantsScreen = () => {
    const {restaurants, error, isLoading} = useContext(RestaurantsContext);
    if(isLoading){
        return (
            <SafeArea>
                <Loader />
            </SafeArea>
        )
    }
    return (
        <SafeArea>
            <Search />
            <FlatList
                data={restaurants}
                renderItem={({item}) => <RestaurantInfoCard restaurant={item}/>}
                keyExtractor={(item) => String(item.name)}
                />
        </SafeArea>
    )
}

export default RestaurantsScreen;
