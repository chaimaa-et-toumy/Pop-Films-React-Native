import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './Search'
import Home from './Home'
import Profile from './Profile'
import Favorite from './Favorite'

const Navbar = () => {
        const Tab = createBottomTabNavigator()
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'home-outline';
                            size = focused ? 30 : 25
                            color = focused ? '#E82626' : 'white'
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline';
                            size = focused ? 30 : 25
                            color = focused ? '#E82626' : 'white'
                        } else if (route.name === 'Favorite') {
                            iconName = focused ? 'save' : 'save-outline';
                            size = focused ? 30 : 25
                            color = focused ? '#E82626' : 'white'
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                            size = focused ? 30 : 25
                            color = focused ? '#E82626' : 'white'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#38354B',
                        height: 65,
                        borderTopWidth: 0,
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false}} />

            </Tab.Navigator>
        )
    }

export default Navbar
