import styled from 'styled-components/native';
import {View, ImageBackground} from 'react-native';
import {space} from '../../../../infrastructure/theme/spacing';
import {sizes} from '../../../../infrastructure/theme/sizes';
import {Text} from '../../../../components/typography/text.component';

export const Background = styled(ImageBackground)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const BackgroundOpacity = styled(View)`
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
`

export const InnerContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${space[4]};
    border-radius: ${space[2]};
    margin-top: ${space[3]}
`

export const Title = styled(Text).attrs({
    variant: "label"
})`
    font-size: ${sizes[2]};
`
