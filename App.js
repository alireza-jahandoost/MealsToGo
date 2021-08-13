import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {ThemeProvider} from 'styled-components/native';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {FavoritesContextProvider} from './src/services/favorites/favorites.context';
import {theme} from './src/infrastructure/theme';

import {useFonts as useOswald,Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato,Lato_400Regular} from '@expo-google-fonts/lato';

import {Navigation } from './src/infrastructure/navigation/index';

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
            <FavoritesContextProvider>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <Navigation/>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </FavoritesContextProvider>
            <ExpoStatusBar style="auto" />
        </ThemeProvider>
    );
}
