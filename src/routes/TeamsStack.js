import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FilterTeams from './../screen/FilterTeams';
import SearchedTeams from '../screen/SearchedTeams';

const TeamsStack = createStackNavigator();

const TeamsNavigation = () => (
    <TeamsStack.Navigator headerMode="none">
        <TeamsStack.Screen name="FilterTeams" component={FilterTeams} />
        <TeamsStack.Screen name="TeamDetail" component={SearchedTeams} />
    </TeamsStack.Navigator>
);

export default TeamsNavigation;
