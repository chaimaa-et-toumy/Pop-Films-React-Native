import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import moment from 'moment';

const SeeAll = ({ navigation, route }) => {

  const [data, setData] = useState(route.params.apiData)
  // console.log(data);

  return (
    <>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.title}>See All</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          >
            {
              data.map((item, index) => {
                // console.log(item);
                return (
                  <TouchableOpacity key={index} onPress={() => { navigation.navigate('Details', { id: item.id, film: item }) }}>
                    <View style={styles.bgView} >
                      <View>
                        <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />

                        <View style={styles.description}>
                          <Text style={styles.minititle}>{item.title} </Text>
                          <View style={styles.review}>
                            <Ionicons name='star' size={15} color='#FFD700' />
                            <Text style={{ color: '#fff', fontSize: 15 }}>{item.vote_average}</Text>
                          </View>
                          <Text style={{ color: "#D7CFCF", fontSize: 17 }}><AntDesign name='calendar' size={16} />  {moment(item.release_date).year()}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </>

  )
}

export default SeeAll

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#1C1A29'
  },
  img: {
    width: 155,
    height: 210,
    margin: 10,

  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 9,
    textAlign: 'center',
    marginTop: 19,
  },
  minititle: {
    color: "#D7CFCF",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    flexWrap: 'wrap',
    width: 150
  },
  bgView: {
    flexDirection: "column",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    marginTop: 19,
    padding: 3,
    marginHorizontal: 9,
    marginLeft: 10,
  },
  description: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingBottom: 10,

  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 40, 54, 0.85)',
    width: 55,
    borderColor: 'gray',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingVertical: 5,
    position: 'absolute',
    top: -42,
    left: 110,
    justifyContent: 'space-evenly',
  },
})