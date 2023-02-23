//react
import React from 'react';
//react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//components
import { AuthScreen } from '../../../screens/auth';
//types
import { AuthStackNavigatorParamList } from '../../../types/navigation';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'auth'}
        >
            <Stack.Screen name={'auth'} component={AuthScreen} />
        </Stack.Navigator>
    );
};
