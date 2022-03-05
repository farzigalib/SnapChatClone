import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from '../Components/Header'
import Loader from '../Components/Loader'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={'#fff'}
            />
            <Header
                headerTitle='LogIn'
                backgroundColor={'#fff'}
                color={'#000'}
                iconName='angle-left'
                onPress={() => navigation.navigate('InitialScreen')}
            />
            <Loader
            // isLoading={true}
            />
            <Text>LoginScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
})

export default LoginScreen