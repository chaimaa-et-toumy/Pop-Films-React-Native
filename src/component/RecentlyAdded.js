import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecentlyFilms } from '../redux/RecentlySlice'


export default function RecentlyAdded({ navigation }) {
    const dispatch = useDispatch()
    const recentlyFilms = useSelector(state => state.Recently.recently)
    useEffect(() => {
        dispatch(fetchRecentlyFilms())
    }, [])

    return (
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
                                        <TouchableOpacity onPress={() => { navigation.navigate('Details', { id: film.id, film: film }) }}>
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
    )
}
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
