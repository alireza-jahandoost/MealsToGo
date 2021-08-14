import React, {useContext} from 'react';

import AuthButton from '../../components/auth-button/auth-button.component';
import MainContainer from '../../components/main-container/main-container.component';
import {Spacer} from '../../../../components/spacer/spacer.component';
import {AuthenticationContext} from '../../../../services/authentication/authentication.context';
import Loader from '../../../../components/loader/loader.component';

const AccountScreen = ({navigation}) => {
    const {isLoading} = useContext(AuthenticationContext);

    if(isLoading){
        return <Loader />
    }

    return (
        <MainContainer>
            <AuthButton
                title="Login"
                onPress={() => navigation.navigate('Login')}
                />
            <Spacer position="top" size="large">
                <AuthButton
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                    />
            </Spacer>

        </MainContainer>
    )
}

export default AccountScreen;
