import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import RestaurantInfoCard from '../restaurant-info-card/restaurant-info-card.component';

const RestaurantsList = ({restaurants, navigation}) => {

    return (
        <FlatList
            data={restaurants}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
                    <RestaurantInfoCard restaurant={item}/>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => String(item.name)}
        />
    )
}

export default RestaurantsList;
