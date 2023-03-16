import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchPopularFilms } from '../redux/PopularSlice'
import { useSelector, useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Details = ({ route }) => {


  const [id, setId] = useState(route.params.id)
  // console.log(id);

  const [data, setData] = useState(route.params.film)
  // console.log(data);

  const dispatch = useDispatch()
  const popularFilms = useSelector(state => state.Popular.popular)
  useEffect(() => {
    dispatch(fetchPopularFilms())
  }, [])
  // useEffect(() => {
  //   console.log("All films", popularFilms[0])
  // }, [popularFilms])


  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {/* cover and image */}
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data?.backdrop_path}` }} style={styles.cover} />
          <View>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}` }} style={styles.img} />
          </View>
          {/* details */}
          <View style={styles.details}>
            <Text style={styles.titre}>{data?.original_title}</Text>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name='star' size={19} color='#F99601' />
                <Text style={{ color: '#777777', fontSize: 17, paddingLeft: 5 }}>{data?.vote_average} / 10</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                <AntDesign name='like2' size={19} color='#A4A3A9' />
                <Text style={{ color: '#777777', fontSize: 17, paddingLeft: 5 }}>{data?.vote_count} from users</Text>
              </View>
            </View>
          </View>
          {/* description */}
          <View style={{ marginHorizontal: 10, marginTop: 18 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Description</Text>
            <Text style={{ color: '#DEDDDF', fontSize: 14, marginTop: 5 }}>{data?.overview}</Text>
          </View>
          {/* Trailer */}
          <View style={{ marginHorizontal: 10, marginTop: 18 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Trailer</Text>
            <Text style={{ color: '#DEDDDF', fontSize: 14, marginTop: 5 }}>No trailer available</Text>
          </View>
          {/* comments */}
          <View style={{ marginHorizontal: 10, marginTop: 18, marginBottom: 10 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Comments</Text>
            <View style={{ backgroundColor: '#242135', marginHorizontal: 8, marginTop: 10, borderRadius: 5 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../public/images/profile.png')} style={{ width: 35, height: 35, borderRadius: 50, marginHorizontal: 10, marginTop: 10 }} />
                <Text style={{ color: '#DEDDDF', fontSize: 16, marginHorizontal: 3, marginTop: 10 }}>John Doe</Text>
              </View>
              <Text style={{ color: '#A4A3A9', fontSize: 14, marginHorizontal: 10, marginTop: 5 }}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#1C1A29',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 9,
    textAlign: 'center',
    marginTop: 19,
  },
  img: {
    width: 180,
    height: 250,
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    top: -160,
    left: '28%',
    borderRadius: 10,

  },
  cover: {
    width: '100%',
    height: 300,
    opacity: 0.6
  },
  details: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titre: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,

  }
})