import React from 'react';
import {Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RestaurantsScreen from '../../features/restaurants/screens/restaurants/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail/restaurant-detail.screen';

const RestaurantsStack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator screenOptions={{ headerShown: false }}>
            <RestaurantsStack.Screen
                name="AllRestaurants"
                component={RestaurantsScreen}
            />
            <RestaurantsStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantsStack.Navigator>
    )
}

export default RestaurantsNavigator;
