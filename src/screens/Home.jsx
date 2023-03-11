import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms } from '../redux/FilmsSlice'
import { fetchPopularFilms } from '../redux/PopularSlice'
import { fetchRecentlyFilms } from '../redux/RecentlySlice'
import { fetchTopFilms } from '../redux/TopSlice'

const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const films = useSelector(state => state.Films.films)
  const popularFilms = useSelector(state => state.Popular.popular)
  const recentlyFilms = useSelector(state => state.Recently.recently)
  const topFilms = useSelector(state => state.TopFilms.topFilms)

  useEffect(() => {
    dispatch(fetchFilms())
    dispatch(fetchPopularFilms())
    dispatch(fetchRecentlyFilms())
    dispatch(fetchTopFilms())
  }, [])

  // useEffect(() => {
  //   console.log("All films", topFilms)
  // }, [topFilms])


  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../public/images/logo.png')} style={styles.logo} />
      </View>
      <View>
        {/* Most popular */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 15
            }}
          >
            <Text style={styles.title}>Most Popular</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SeeAll', { apiData: popularFilms }) }}>
              <Text style={styles.seeAll}>See all <Ionicons name='chevron-forward-outline' size={17} /></Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{ marginTop: 20, marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false} >
            <View
              style={styles.bgView}>
              <View style={{ flexDirection: 'row' }}>
                {
                  popularFilms.map((film, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'column' }}>
                        <TouchableOpacity>
                          <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500${film.poster_path}` }} />
                          <Text style={styles.titleFilm}>{film.title}</Text>
                          <View style={styles.review}>
                            <Ionicons name='star' size={15} color='#FFD700' />
                            <Text style={{ color: '#fff', fontSize: 15 }}>{film.vote_average}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
        </View>
        {/* Top  Rated*/}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 15
            }}
          >
            <Text style={styles.title}>Top Rated</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SeeAll', { apiData: topFilms }) }}>
              <Text style={styles.seeAll}>See all <Ionicons name='chevron-forward-outline' size={17} /></Text></TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{ marginTop: 20, marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false} >
            <View
              style={styles.bgView}>
              <View style={{ flexDirection: 'row' }}>
                {
                  topFilms.map((film, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'column' }}>
                        <TouchableOpacity>
                          <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500${film.poster_path}` }} />
                          <Text style={styles.titleFilm}>{film.title}</Text>
                          <View style={styles.review}>
                            <Ionicons name='star' size={15} color='#FFD700' />
                            <Text style={{ color: '#fff', fontSize: 15 }}>{film.vote_average}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>

        </View>
        {/* Recently Added*/}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 15
            }}
          >
            <Text style={styles.title}>Recently Added</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SeeAll', { apiData: recentlyFilms }) }}>
              <Text style={styles.seeAll}>See all <Ionicons name='chevron-forward-outline' size={17} /></Text></TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{ marginTop: 20, marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false} >
            <View
              style={styles.bgView}>
              <View style={{ flexDirection: 'row' }}>
                {
                  recentlyFilms.map((film, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'column' }}>
                        <TouchableOpacity>
                          <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500${film.poster_path}` }} />
                          <Text style={styles.titleFilm}>{film.title}</Text>
                          <View style={styles.review}>
                            <Ionicons name='star' size={15} color='#FFD700' />
                            <Text style={{ color: '#fff', fontSize: 15 }}>{film.vote_average}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>

        </View>
        {/* Coming soon */}
        <View>
          <View style={styles.allFilmsView}>
            <Text style={styles.title}>Coming Soon</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('SeeAll', { apiData: films }) }}>
              <Text style={styles.seeAll}>
                See all
                <Ionicons name='chevron-forward-outline' size={17} />
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{ marginTop: 20, marginHorizontal: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false} >
            <View
              style={styles.bgView}>
              <View style={{ flexDirection: 'row' }}>
                {
                  films.map((film, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'column' }}>
                        <TouchableOpacity>
                          <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500${film.poster_path}` }} />
                          <Text style={styles.titleFilm}>{film.title}</Text>
                          <View style={styles.review}>
                            <Ionicons name='star' size={15} color='#FFD700' />
                            <Text style={{ color: '#fff', fontSize: 15 }}>{film.vote_average}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
        </View>
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
  img: {
    width: 240,
    height: 310,
    borderRadius: 5,
    margin: 10,
  },
  img_popular: {
    width: 220,
    height: 320,
    borderRadius: 10,
    margin: 8,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 9,
  },
  titleFilm: {
    textAlign: 'center',
    padding: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  allFilmsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20
  },
  logo: {
    width: 190,
    height: 190,
    marginTop: -60
  },
  bgView: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    position: 'absolute',
    top: 289,
    left: 190,
    borderColor: 'gray',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  seeAll: {
    color: 'white',
  }
})