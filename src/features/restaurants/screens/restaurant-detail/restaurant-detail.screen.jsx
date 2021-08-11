import React from 'react';

import RestaurantCardInfo from '../../components/restaurant-info-card/restaurant-info-card.component';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import RestaurantDetailMenu from '../../components/restaurant-detail-menu/restaurant-detail-menu.component';

const RestaurantDetailScreen = ({route}) => {
    const {restaurant} = route.params;
    console.log('here', restaurant);
    return (
        <SafeArea>
            <RestaurantCardInfo restaurant={restaurant} />
            <RestaurantDetailMenu />
        </SafeArea>
    )
}

export default RestaurantDetailScreen;
