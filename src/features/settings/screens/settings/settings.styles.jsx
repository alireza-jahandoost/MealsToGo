import {View} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '../../../../components/typography/text.component';
import {space} from '../../../../infrastructure/theme/spacing';

export const AvatarContainer = styled.View`
    justify-content: center;
    align-items: center;
`

export const Email = styled(Text)`
    margin-top: ${space[3]}; 
`
