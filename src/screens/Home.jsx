import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Populaire from '../component/Populaire'
import TopRated from '../component/TopRated'
import RecentlyAdded from '../component/RecentlyAdded'
import ComingSoon from '../component/ComingSoon'

const Home = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../public/images/logo.png')} style={styles.logo} />
      </View>
      <View>
        {/* Most popular */}
        <Populaire navigation={navigation} />

        {/* Top  Rated*/}
        <TopRated navigation={navigation} />

        {/* Recently Added*/}
        <RecentlyAdded navigation={navigation} />

        {/* Coming soon */}
        <ComingSoon navigation={navigation} />


      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#1C1A29'
  },
  logo: {
    width: 190,
    height: 190,
    marginTop: -60
  },
})