import React from 'react';
import {Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../features/account/screens/account/account.screen';
import LoginScreen from '../../features/account/screens/login/login.screen';
import RegisterScreen from '../../features/account/screens/register/register.screen';

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {

    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen
                name="Main"
                component={AccountScreen}
            />
            <AccountStack.Screen
                name="Login"
                component={LoginScreen}
            />
            <AccountStack.Screen
                name="Register"
                component={RegisterScreen}
            />
        </AccountStack.Navigator>
    )
}

export default AccountNavigator;
