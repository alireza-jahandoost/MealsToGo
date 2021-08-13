import React,{useContext} from 'react';
import {ScrollView} from 'react-native';
import {
    Item,
    ItemContainer,
    MainContainer,
    Title
} from './favorites-bar.styles';

const FavoritesBar = ({restaurants, onNavigate}) => {
    if(!restaurants.length){
        return null;
    }
    return (
        <MainContainer>
            <Title variant="caption"> Favorites </Title>

            <ScrollView
                horizontal
                ShowHorizontalScrollIndicator={false}
            >
                {
                    restaurants.map((restaurant) => (
                        <ItemContainer
                            onPress={() => onNavigate("RestaurantDetail", {restaurant})}
                            key={restaurant.name}
                        >
                            <Item
                                restaurant={restaurant}
                                byImage={true}
                            />
                    </ItemContainer>
                    ))
                }
            </ScrollView>
        </MainContainer>
    )
}

export default FavoritesBar;
