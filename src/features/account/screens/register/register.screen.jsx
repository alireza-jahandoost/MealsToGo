import React, {useContext, useState} from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import AuthInput from '../../components/auth-input/auth-input.component';
import MainContainer from '../../components/main-container/main-container.component';
import AuthButton from '../../components/auth-button/auth-button.component';
import {Spacer} from '../../../../components/spacer/spacer.component';
import {Text} from '../../../../components/typography/text.component';

import {AuthenticationContext} from '../../../../services/authentication/authentication.context';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {onRegister, error, isLoading} = useContext(AuthenticationContext);

    return (
        <MainContainer>
            {error &&
                <Spacer position="bottom" size="large">
                    <Text variant="error">
                        {error}
                    </Text>
                </Spacer>
            }
            <AuthInput
              label="Email"
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Spacer position="top" size="large">
                <AuthInput
                  label="Confirm Password"
                  autoCapitalize="none"
                  textContentType="password"
                  keyboardType="default"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                />
            </Spacer>
            <Spacer position="top" size="large">
                <AuthInput
                  label="Password"
                  autoCapitalize="none"
                  textContentType="password"
                  keyboardType="default"
                  secureTextEntry
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
            </Spacer>
            <Spacer position="top" size="large">
                {
                    isLoading ? (
                          <ActivityIndicator animating={true} color={Colors.blue300} />
                    ) : (
                        <AuthButton
                            title="Register"
                            icon="mail"
                            onPress={() => onRegister(email, password, confirmPassword)}
                        />
                    )
                }
            </Spacer>
        </MainContainer>
    )
}

export default LoginScreen;
