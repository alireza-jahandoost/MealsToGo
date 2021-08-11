import React, {useState} from 'react';
import { List } from 'react-native-paper';
import {ScrollView} from 'react-native';

const RestaurantDetailMenu = () => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <ScrollView>
            <List.Accordion
                title="Breakfast"
                left={props => <List.Icon {...props} icon="bread-slice" />}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
                <List.Item title="Bacon, Egg and Cheese Biscuit" />
                <List.Item title="Egg McMuffin" />
                <List.Item title="Sausage Biscuit" />
            </List.Accordion>

            <List.Accordion
                title="Lunch"
                left={props => <List.Icon {...props} icon="hamburger" />}
                onPress={() => setLunchExpanded(!lunchExpanded)}
            >
                <List.Item title="Big Mac" />
                <List.Item title="Quarter Pounder with Cheese" />
                <List.Item title="Double Quarter Pounder with Cheese" />
            </List.Accordion>

            <List.Accordion
                title="Dinner"
                left={props => <List.Icon {...props} icon="food-variant" />}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}
            >
                <List.Item title="Crispy Chicken Sandwich" />
                <List.Item title=" Spicy Crispy Chicken Sandwich" />
                <List.Item title="McChicken" />
            </List.Accordion>

            <List.Accordion
                title="Drinks"
                left={props => <List.Icon {...props} icon="cup" />}
                onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
                <List.Item title="Caramel Macchiato" />
                <List.Item title=" Cappuccino" />
                <List.Item title="French Vanilla Cappuccino" />
            </List.Accordion>
        </ScrollView>
    )
}

export default RestaurantDetailMenu;
