import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../../features/settings/screens/settings/settings.screen';
import FavoritesScreen from '../../features/settings/screens/favorites/favorites.screen';
import CameraScreen from '../../features/settings/screens/camera/camera.screen';

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {

    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
            />
            <SettingsStack.Screen
                name="CameraScreen"
                component={CameraScreen}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsNavigator;
