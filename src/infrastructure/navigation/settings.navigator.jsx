import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../../features/settings/screens/settings/settings.screen';
import FavoritesScreen from '../../features/settings/screens/favorites/favorites.screen';

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {

    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="MainSettings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name="Favorites"
                component={FavoritesScreen}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator;
