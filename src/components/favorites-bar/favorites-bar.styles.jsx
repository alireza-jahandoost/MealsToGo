import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info/compact-restaurant-info.component';
import {theme} from '../../infrastructure/theme/index';
import {Text} from '../typography/text.component';

export const MainContainer = styled.View`
    padding: ${theme.space[3]};
`

export const Item = styled(CompactRestaurantInfo)`
`

export const ItemContainer = styled.TouchableOpacity`
margin-left: ${theme.space[2]};
`

export const Title = styled(Text)`
    padding-left: ${theme.space[4]};
`
