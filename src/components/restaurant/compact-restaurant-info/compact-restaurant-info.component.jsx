import React from 'react';
import {
    Item,
    CompactImage
} from './compact-restaurant-info.styles';
import {Text} from '../../typography/text.component';

const CompactRestaurantInfo = ({restaurant}) => {
    const {photos, name} = restaurant;
    return (
        <Item>
            <CompactImage source={{uri: photos[0]}}/>
            <Text center variant="caption" numberOfLines={3}> {name} </Text>
        </Item>
    )
}

export default CompactRestaurantInfo;
