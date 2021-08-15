import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import FadeInAnimation from '../../animations/fade-in/fade-in.animation';
import RestaurantInfoCard from '../restaurant-info-card/restaurant-info-card.component';

const RestaurantsList = ({restaurants, navigation}) => {

    return (
        <FlatList
            data={restaurants}
            renderItem={({item}) => (
                <FadeInAnimation>
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
                        <RestaurantInfoCard restaurant={item}/>
                    </TouchableOpacity>
                </FadeInAnimation>
            )}
            keyExtractor={(item) => String(item.name)}
        />
    )
}

export default RestaurantsList;
