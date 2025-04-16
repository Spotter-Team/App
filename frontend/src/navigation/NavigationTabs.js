import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

//import AccountInfo from '../screens/Profile/AccountInfo';
import UserProfile from '../screens/Profile/UserProfile';
import Messages from '../screens/Chats/Messages';
import GymHub from '../screens/GymHub/GymHub';
import Match from '../screens/Home/Match';
import COLORS from '../utils/theme';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const BlankScreen = ({ title }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
    </View>
);

export default function NavigationTabs() {

    const WithHeader = ({ children, title }) => {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Header activeScreen={title} />
                {children}
            </View>
        );
    };

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
                            iconName = 'barbell';
                            break;
                        case 'Explore':
                            iconName = 'grid';
                            break;
                        case 'Messages':
                            iconName = 'chatbox';
                            break;
                        case 'Profile':
                            iconName = 'person';
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Matching" children={() => (
                <WithHeader title="Matching">
                    <Match />
                </WithHeader>
            )} />

            <Tab.Screen name="Explore" children={() => (
                <WithHeader title="Explore">
                    <GymHub />
                </WithHeader>
            )} />

            <Tab.Screen name="Messages" children={() => (
                <WithHeader title="Messages">
                    <Messages />
                </WithHeader>
            )} />

            <Tab.Screen name="Profile" children={() => (
                <WithHeader title="Profile">
                    <UserProfile />
                </WithHeader>
            )
            
            } />
        </Tab.Navigator>
    );
}
