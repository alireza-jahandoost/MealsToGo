import React, {useContext} from 'react';
import { List, Avatar } from 'react-native-paper';
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
    return (
        <SafeArea>
            <FadeInAnimation>
            <AvatarContainer>
                <Avatar.Icon
                    size={180}
                    icon="human"
                    backgroundColor="#27decd"
                />
            <Email variant="label"> {user.email} </Email>
            </AvatarContainer>
            <List.Section>
                <List.Item
                    title="Favorites"
                    left={() => <List.Icon icon="heart" />}
                    onPress={() => navigation.navigate("Favorites")}
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
