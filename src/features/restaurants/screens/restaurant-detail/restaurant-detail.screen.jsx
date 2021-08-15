import React from 'react';

import RestaurantInfoCard from '../../../../components/restaurant/restaurant-info-card/restaurant-info-card.component';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import RestaurantDetailMenu from '../../components/restaurant-detail-menu/restaurant-detail-menu.component';

const RestaurantDetailScreen = ({route}) => {
    const {restaurant} = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <RestaurantDetailMenu />
        </SafeArea>
    )
}

export default RestaurantDetailScreen;
