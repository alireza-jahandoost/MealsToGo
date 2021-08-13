import React, {useContext, useEffect, useState} from 'react';
import {
    SearchContainer,
    StyledSearchbar,
} from './search.styles';
import {LocationContext} from '../../../../services/location/location.context';


const Search = ({onFavoritesToggle, isFavoritesToggle}) => {
    const {location, keyword, isLoading, error, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])
    return (
        <SearchContainer>
            <StyledSearchbar
                icon={isFavoritesToggle ? 'heart' : 'heart-outline'}
                onIconPress={onFavoritesToggle}
                placeholder="Search for a location"
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
                onSubmitEditing={() => {
                    search(searchKeyword.trim());
                }}
                value={searchKeyword}
                />
        </SearchContainer>
    )
}

export default Search;
