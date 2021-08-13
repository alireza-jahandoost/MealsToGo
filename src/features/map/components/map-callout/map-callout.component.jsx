import React from 'react';
import {Platform} from 'react-native';

import CompactRestaurantInfo from '../../../../components/restaurant/compact-restaurant-info/compact-restaurant-info.component';
const MapCallout = ({restaurant}) => {

    return (
        <CompactRestaurantInfo
            restaurant={restaurant}
            byImage={Platform === 'ios'}
        />
    )
}

export default MapCallout;
