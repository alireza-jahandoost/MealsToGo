import React, {useContext, useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import { List, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FadeInAnimation from '../../../../components/animations/fade-in/fade-in.animation';

import {
    AvatarContainer,
    Email,
} from './settings.styles';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import {AuthenticationContext} from '../../../../services/authentication/authentication.context';
import Loader from '../../../../components/loader/loader.component';

const SettingsScreen = ({navigation}) => {
    const {onSignOut, isLoading, user} = useContext(AuthenticationContext);
    const [photoUri, setPhotoUri] = useState(null);

      useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem(`@profile-image-${user.uid}`)
            .then((response) => {
                setPhotoUri(response);
            });
      }, [user])
      );

    return (
        <SafeArea>
            <FadeInAnimation>
                <AvatarContainer>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CameraScreen")}
                    >
                        {
                            photoUri ? (
                                <Avatar.Image
                                    size={180}
                                    source={{uri: photoUri}}
                                />
                            ) : (
                                <Avatar.Icon
                                    size={180}
                                    icon="human"
                                    backgroundColor="#27decd"
                                />
                            )
                        }
                    </TouchableOpacity>
                <Email variant="label"> {user.email} </Email>
                </AvatarContainer>
                <List.Section>
                    <List.Item
                        title="Favorites"
                        left={() => <List.Icon icon="heart" />}
                        onPress={() => navigation.navigate("FavoritesScreen")}
                    />
                    <List.Item
                        title="Logout"
                        left={() => <List.Icon color="#000" icon="logout" />}
                        onPress={() => onSignOut()}
                    />
                </List.Section>
            </FadeInAnimation>
        </SafeArea>
    )
}

export default SettingsScreen;
