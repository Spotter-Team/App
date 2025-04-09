import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import AccountInfo from '../screens/AccountInfo';
import COLORS from '../utils/theme';

const Tab = createBottomTabNavigator();

const BlankScreen = ({ title }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
    </View>
);

export default function NavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { 
                    backgroundColor: '#141417',
                    height: 80,
                    borderTopWidth: 0 
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.accent,
                tabBarInactiveTintColor: '#888',
                tabBarIconStyle: { marginTop: 10 },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Matching':
                            iconName = 'barbell-outline';
                            break;
                        case 'Explore':
                            iconName = 'search-outline';
                            break;
                        case 'Messages':
                            iconName = 'chatbubble-outline';
                            break;
                        case 'Profile':
                            iconName = 'person-outline';
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Matching">{() => <BlankScreen title="Matching" />}</Tab.Screen>
            <Tab.Screen name="Explore">{() => <BlankScreen title="Explore" />}</Tab.Screen>
            <Tab.Screen name="Messages">{() => <BlankScreen title="Messages" />}</Tab.Screen>
            <Tab.Screen name="Profile" component={AccountInfo} />
        </Tab.Navigator>
    );
}
