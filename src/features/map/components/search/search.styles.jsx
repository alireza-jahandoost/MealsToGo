import React from 'react';
import {Searchbar} from "react-native-paper";
import { View } from "react-native";
import styled from 'styled-components/native';

export const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    top: 50px;
    width: 100%;
    z-index: 100;
`;

export const StyledSearchbar = styled(Searchbar)`
`
