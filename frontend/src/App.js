import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import AccountInfo from './screens/AccountInfo';
import NavigationTabs from './navigation/NavigationTabs';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="AccountInfo" component={AccountInfo} />
                <Stack.Screen name="HomeTabs" component={NavigationTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
