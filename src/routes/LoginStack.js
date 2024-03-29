import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login/index';

const LoginStack = createStackNavigator();

const LoginNavigator = () => (
    <LoginStack.Navigator headerMode="none">
        <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
);

export default LoginNavigator;
