import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin: ${(props) => props.theme.space[3]} `;

export const RestaurantCardCover = styled(Card.Cover)`
    margin: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const Star = styled.Image`
    width: 20px;
    height: 20px;
`;

export const Rating = styled.View`
    flex-direction: row;
    padding:${(props) => props.theme.space[3]} 0;
`

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const InnerSection = styled.View`
    flex-direction: row;
    align-items: center;
`

export const RestaurantIcon = styled.Image`
    width: 20px;
    height: 20px;
`

export const OpenIcon = styled.Image`
    width: 20px;
    height: 20px;
`;
