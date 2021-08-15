import React, { useState, useEffect, useContext, useRef } from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StyledCamera,
    ButtonContainer,
    Button,
    Icon,
} from './camera.styles';

import {AuthenticationContext} from '../../../../services/authentication/authentication.context';

const CameraScreen = ({navigation}) => {
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const {user} = useContext(AuthenticationContext);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const snap = () => {
        if(cameraRef){
            cameraRef.current.takePictureAsync()
            .then((locate) => {
                return AsyncStorage.setItem(`@profile-image-${user.uid}`, locate.uri);
            })
            .then(() => {
                navigation.navigate("SettingsScreen");
            })
            .catch(e => {
                console.error(e);
                navigation.navigate("SettingsScreen");
            });
        }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
        }
        return (
            <StyledCamera
                ref={(camera) => cameraRef.current = camera}
                type={type}
                ratio="1,1"
            >
                <ButtonContainer>
                    {
                            <Button
                                onPress={snap}
                            >
                                <Icon/>
                            </Button>
                    }
                </ButtonContainer>
            </StyledCamera>
        );
    }

    export default CameraScreen;
