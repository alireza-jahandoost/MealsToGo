import React from 'react';
import {
    Item,
    CompactImageIos,
    CompactImageAndroid
} from './compact-restaurant-info.styles';
import {Text} from '../../typography/text.component';

const CompactRestaurantInfo = ({restaurant, byImage}) => {
    // if byImage is true, component will be mount with ImageComponent and if it is false, component will be mount with WebView
    const {photos, name} = restaurant;
    return (
        <Item>
            {
                byImage ?
                <CompactImageIos source={{uri: photos[0]}} /> :
                <CompactImageAndroid source={{uri: photos[0]}}/>
            }
            <Text center variant="caption" numberOfLines={3}> {name} </Text>
        </Item>
    )
}

export default CompactRestaurantInfo;
