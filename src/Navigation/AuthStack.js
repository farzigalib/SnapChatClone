import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from '../Screen/InitialScreen';
import LoginScreen from '../Screen/LoginScreen';
import SignUpScreen from '../Screen/SignUpScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null
            }}
        >
            <Stack.Screen
                name='InitialScreen'
                component={InitialScreen}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
            />
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

export default AuthStack