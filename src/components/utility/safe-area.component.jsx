import React from 'react';
import {SafeAreaView, Platform, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;
