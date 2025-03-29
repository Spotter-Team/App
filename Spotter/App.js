import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './CreateAccount';
import Login from './Login';
import AccountInfo from './AccountInfo';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }} 
                />

                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'SPOTTER' }} />
                <Stack.Screen name="AccountInfo" component={AccountInfo} options={{ title: 'Complete Your Profile' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}