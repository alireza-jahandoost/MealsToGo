import React, {useContext, useEffect, useState} from 'react';
import {
    SearchContainer,
    StyledSearchbar,
} from './search.styles';
import {LocationContext} from '../../../../services/location/location.context';


const Search = () => {
    const {location, keyword, isLoading, error, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <StyledSearchbar
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
