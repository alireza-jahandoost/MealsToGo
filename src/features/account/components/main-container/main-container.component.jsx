import React from 'react';
import LottieView from 'lottie-react-native';
import {
    Background,
    InnerContainer,
    BackgroundOpacity,
    Title,
    AnimationContainer
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
                <AnimationContainer>
                    <LottieView
                        key="animation"
                        loop
                        autoPlay
                        resizeMode="cover"
                          source={require('../../../../../assets/watermelon.json')}
                    />
                </AnimationContainer>
                <Title> Meals To Go </Title>
                <InnerContainer>
                    {children}
                </InnerContainer>
            </Background>
        </SafeArea>
    )
}

export default MainContainer;
