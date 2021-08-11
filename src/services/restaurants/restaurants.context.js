import React, {useState, useEffect, useContext, createContext, useMemo} from 'react';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';
import {LocationContext} from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {location} = useContext(LocationContext);

    const retrieveRestaurants = (LocationString) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(LocationString)
            .then(restaurantsTransform)
            .then((results) => {
                setIsLoading(false);
                setRestaurants(results);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            })
        } , 2000);
    }
    useEffect(() => {
        if(location){
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

    return(
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}
