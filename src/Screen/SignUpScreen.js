import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from '../Components/Header'

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={'#fff'}
            />
            <Header
                headerTitle='SignUp'
                backgroundColor={'#fff'}
                color={'#000'}
                iconName='angle-left'
                onPress={() => navigation.navigate('InitialScreen')}
            />
            <Text>SignUpScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignUpScreen