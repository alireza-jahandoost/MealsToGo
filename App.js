import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import {SafeArea} from './src/components/utility/safe-area.component';
import {ThemeProvider} from 'styled-components/native';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {theme} from './src/infrastructure/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants/restaurants.screen';
import {useFonts as useOswald,Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato,Lato_400Regular} from '@expo-google-fonts/lato';

import Ionicons from '@expo/vector-icons/Ionicons';

const SettingsScreen = () => {
    return <SafeArea>
        <Text> Settings </Text>
    </SafeArea>;
}

const MapScreen = () => {
    return <SafeArea>
        <Text> Map </Text>
    </SafeArea>;
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular
    });
    const [latoLoaded] = useLato({
        Lato_400Regular
    });
    if(!oswaldLoaded || !latoLoaded){
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={({ route }) => ({
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
                            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                            <Tab.Screen name="Map" component={MapScreen} />
                            <Tab.Screen name="Settings" component={SettingsScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </RestaurantsContextProvider>
            </LocationContextProvider>
            <ExpoStatusBar style="auto" />
        </ThemeProvider>
    );
}
