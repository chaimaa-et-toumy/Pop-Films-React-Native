import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
const Start = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ImageBackground style={{ height: '100%' }} source={require('../public/images/cover.png')}>
            <View style={styles.contenu}>
                <Image source={require('../public/images/logo.png')} style={{ marginTop: -140 }} />
        <Pressable style={styles.btn}
            onPress={() => { navigation.navigate('Navbar') }}
        >
            <Text style={styles.btnTitle}>Start</Text>
        </Pressable>
                </View>
            </ImageBackground >
        </View >
    )
}

export default Start

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    contenu: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#E82626',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        top: 470,
    },
    btnTitle: {
        color: '#fff',
        fontSize: 18
    },
})