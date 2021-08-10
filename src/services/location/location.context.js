import React,{useState, useEffect, createContext} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {
        if(keyword.length === 0){
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(result => {
            setIsLoading(false);
            setLocation(result);
        })
        .catch(err => {
            setIsLoading(false);
            setError(err);
            console.error(err);
        })
    }, [keyword])

    return (
        <LocationContext.Provider
            value={{
                location,
                keyword,
                isLoading,
                error,
                search: onSearch,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}
