import React from 'react';
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {SafeArea} from '../../components/utility/safe-area.component';

import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';


const SettingsScreen = () => {
    return <SafeArea>
        <Text> Settings </Text>
    </SafeArea>;
}

const Tab = createBottomTabNavigator();

const AppNavigator = () => {


    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Restaurants') {
                            iconName = 'md-restaurant';
                        } else if (route.name === 'Settings') {
                            iconName = 'md-settings';
                        } else if (route.name === 'Map') {
                            iconName = 'md-map';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}

                >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
