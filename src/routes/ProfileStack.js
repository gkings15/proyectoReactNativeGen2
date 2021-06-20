import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screen/Profile';
import Camera from '../screen/Camera';

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => (
    <ProfileStack.Navigator headerMode="none">
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="Camera" component={Camera} />
    </ProfileStack.Navigator>
);

export default ProfileNavigator;