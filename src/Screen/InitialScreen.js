import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import CustomButton from '../Components/CustomButton';

const InitialScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={'#F2EF00'}
            />
            <Image
                source={require('../../assets/authassets/snapchatlogo.png')}
                style={styles.logo}
            />
            <View style={{ marginTop: 70, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <CustomButton
                    title='LOG IN'
                    height={60}
                    width={'80%'}
                    borderRadius={30}
                    backgroundColor={'#2e64e5'}
                    onPress={() => navigation.navigate('LoginScreen')}
                />
                <CustomButton
                    title='SIGN UP'
                    height={60}
                    width={'80%'}
                    borderRadius={30}
                    backgroundColor={'#900000'}
                    onPress={() => navigation.navigate('SignUpScreen')}
                />
            </View>
            <View style={{ marginTop: 150 }}>
                <Text style={{ color: '#000', textTransform: 'uppercase' }}>snapchat Inc © 2022</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2EF00',
        alignItems: 'center',
    },
    logo: {
        height: 150,
        width: 150,
        margin: 150,
        resizeMode: 'stretch'
    }
})


export default InitialScreen;