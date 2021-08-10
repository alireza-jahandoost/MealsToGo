import React from 'react';
import {Colors} from 'react-native-paper';
import {
    Loading,
    LoadingContainer,
} from './loader.styles';

const Loader = () => (
    <LoadingContainer>
        <Loading
            animating={true}
            color={Colors.blue300}
            size={50}
        />
    </LoadingContainer>
);

export default Loader;
