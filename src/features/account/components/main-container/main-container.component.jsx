import React from 'react';
import {
    Background,
    InnerContainer,
    BackgroundOpacity,
    Title
} from './main-container.styles';
import {SafeArea} from '../../../../components/utility/safe-area.component';

const MainContainer = ({children}) => {
    return (
        <SafeArea>
            <Background
                source={require('../../../../../assets/home_bg.jpg')}
                resizeMode="cover"
            >
                <BackgroundOpacity />
                <Title> Meals To Go </Title>
                <InnerContainer>
                    {children}
                </InnerContainer>
            </Background>
        </SafeArea>
    )
}

export default MainContainer;
