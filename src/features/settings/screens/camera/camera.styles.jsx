import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import {AntDesign} from '@expo/vector-icons';

export const StyledCamera = styled(Camera)`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`

export const ButtonContainer = styled.View`
    width: 25%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 5px solid rgba(255, 255, 255, 0.7);
    border-radius: 100px;
`

export const Icon = styled(AntDesign).attrs({
    name:"camerao",
    size: 50
})`
    color: rgba(255, 255, 255, 0.7);
`
