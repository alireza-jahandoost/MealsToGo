import React from 'react';

import CompactRestaurantInfo from '../../../../components/restaurant/compact-restaurant-info/compact-restaurant-info.component';
const MapCallout = ({restaurant}) => {

    return (
        <CompactRestaurantInfo
            restaurant={restaurant}
        />
    )
}

export default MapCallout;
