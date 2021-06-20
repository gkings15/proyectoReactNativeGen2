import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginNavigator from './LoginStack';
import { connect } from 'react-redux';
import BottomNavigation from './BottomTabStack';

const RootStack = createStackNavigator();

const RootNavigation = ({ isValidLogin }) => (
    <NavigationContainer>
        <RootStack.Navigator headerMode='none'>
            {!isValidLogin ? (
                <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
            ) : (
                <RootStack.Screen name="Botones" component={BottomNavigation} />
            )}

        </RootStack.Navigator>
    </NavigationContainer>
);

const mapStateToProps = globalState => {
    return {
        isValidLogin: globalState.loginReducer.valid,
    };
};

export default connect(mapStateToProps)(RootNavigation);