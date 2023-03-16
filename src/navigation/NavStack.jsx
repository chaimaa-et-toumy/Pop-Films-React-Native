import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../screens/Start';
import Navbar from './Navbar';
import store from '../utils/store'
import SeeAll from '../component/SeeAll';
import { Provider } from 'react-redux'
import Details from '../component/Details';
import Home from '../screens/Home';
import Populaire from '../component/Populaire';
const Stack = createNativeStackNavigator();


export const SeeAlls = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false
                }
            }>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SeeAll" component={SeeAll} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Populaire" component={Populaire} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const NavStack = () => {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={
                    {
                        headerShown: false
                    }
                }>
                    <Stack.Screen name="Start" component={Start} />
                    <Stack.Screen name="Navbar" component={Navbar} />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default NavStack
