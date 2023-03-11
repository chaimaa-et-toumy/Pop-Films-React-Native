import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../screens/Start';
import Navbar from '../screens/Navbar';
import store from './store'
import SeeAll from '../component/SeeAll';
import { Provider } from 'react-redux'

const NavStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={
                    {
                        headerShown: false
                    }
                }>
                    {/* <Stack.Screen name="Start" component={Start} /> */}
                    <Stack.Screen name="Navbar" component={Navbar} />
                    <Stack.Screen name="SeeAll" component={SeeAll} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default NavStack

const styles = StyleSheet.create({})