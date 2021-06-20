import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from 'react-native-vector-icons/FontAwesome';
import ConferenceNavigation from './ConferenceStack';
import ProfileNavigator from './ProfileStack';
import TeamsNavigation from './TeamsStack';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    colors: {
        color: colors.red,
        backgroundColor: colors.blue,
    }
});

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
    const navigation = useNavigation();
    return (
        <BottomTabs.Navigator >
            <BottomTabs.Screen
                name="Conferences"
                component={ConferenceNavigation}

                options={{
                    tabBarIcon: ({ color, focused }) => {
                        Icon.loadFont();
                        const iconSize = focused ? 35 : 25;
                        return (
                            <View style={styles.icon}>
                                <Icon name="basketball" color={color} size={iconSize} />
                            </View>
                        );
                    },
                }}
            />
            <BottomTabs.Screen
                name="Teams"
                component={TeamsNavigation}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        Icon.loadFont();
                        const iconSize = focused ? 35 : 25;
                        return (
                            <View style={styles.icon}>
                                <Icon name="basketball-hoop-outline" color={color} size={iconSize} />
                            </View>
                        );
                    },
                }}
            />
            <BottomTabs.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        Font.loadFont();
                        const iconSize = focused ? 35 : 25;
                        return (
                            <View style={styles.icon}>
                                <Font name="user-secret" color={color} size={iconSize} />
                            </View>
                        );
                    },
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default BottomNavigation;