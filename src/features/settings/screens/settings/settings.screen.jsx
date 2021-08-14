import React, {useContext} from 'react';
import {Button} from 'react-native';
import {SafeArea} from '../../../../components/utility/safe-area.component';
import {AuthenticationContext} from '../../../../services/authentication/authentication.context';
import Loader from '../../../../components/loader/loader.component';

const SettingsScreen = () => {
    const {onSignOut, isLoading} = useContext(AuthenticationContext);
    return (
        <SafeArea>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <Button
                        title = "Logout"
                        onPress={onSignOut}
                    />
                )
            }
        </SafeArea>
    )
}

export default SettingsScreen;
