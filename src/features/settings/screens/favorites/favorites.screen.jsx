import React, {useContext} from 'react';

import {
    Container,
} from './favorites.styles';
import {Text} from '../../../../components/typography/text.component';
import RestaurantsList from '../../../../components/restaurant/restanrants-list/restanrants-list.component';
import {SafeArea} from '../../../../components/utility/safe-area.component';

import {FavoritesContext} from '../../../../services/favorites/favorites.context';

const FavoritesScreen = ({navigation}) => {
    const {favorites} = useContext(FavoritesContext);
    return (
        <SafeArea>
            {
                favorites.length ? (
                    <RestaurantsList
                        restaurants={favorites}
                        navigation={navigation}
                    />
                ) : (
                    <Container>
                        <Text variant="label"> Favorite List is empty </Text>
                    </Container>
                )
            }
        </SafeArea>
    )
}

export default FavoritesScreen;
