import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <Text>Favorite</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor:'#1C1A29'
    },
})