import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Conferences from '../screen/Conferences';
import Teams from '../screen/Teams';
import TeamDetail from '../screen/TeamDetail';

const ConferenceStack = createStackNavigator();

const ConferenceNavigation = () => (
    <ConferenceStack.Navigator headerMode="none">
        <ConferenceStack.Screen name="Conferences" component={Conferences} />
        <ConferenceStack.Screen name="Teams" component={Teams} />
        <ConferenceStack.Screen name="TeamDetail" component={TeamDetail} />
    </ConferenceStack.Navigator>
);

export default ConferenceNavigation;
