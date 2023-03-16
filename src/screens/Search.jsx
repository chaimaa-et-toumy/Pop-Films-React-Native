import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableWithoutFeedback, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSearchFilms } from '../redux/searchSlice'

const Search = ({ navigation }) => {
    const dispatch = useDispatch()
    const searchFilms = useSelector(state => state.SearchFilms.searchFilms)
    const [searchText, setSearchText] = useState('')


    useEffect(() => {
        dispatch(fetchSearchFilms(searchText))
        // console.log(searchText)
        // console.log(searchFilms)
    }, [searchText])


    const renderItem = ({ item }) => (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Details', { film: item })}>
            <View style={styles.wrapper}>
                {item.poster_path !== null ? (
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                        style={styles.img}
                    />
                ) : (
                    <Text style={styles.image}>{item.original_title}</Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Text style={styles.titles}>Search</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={text =>
                            setSearchText(text)

                        }
                    />
                    <Ionicons name="search" size={20} color="#fff" />
                </View>
            </View>
            <View style={styles.content}>
                {searchFilms.length === 0 && (
                    <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>Search for your best movie</Text>
                )}
                <FlatList
                    data={searchFilms}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    onEndReachedThreshold={0.5}
                    style={styles.flatList}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#1C1A29'
    },
    titles: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 0
    },
    searchInput: {
        flex: 1,
        height: 39,
    },
    search: {
        marginTop: 50,
    },
    content: {
        marginTop: 50,
        width: '100%',
    },
    wrapper: {
        flex: 1,
        margin: 5,
        height: 180,
        borderRadius: 10,
        overflow: 'hidden',
    },
    row: {
        justifyContent: 'space-between',
    },
    flatList: {
        paddingBottom: 200,
        marginBottom: 180,
    },
    img: {
        flex: 1,
        width: 120,
        height: 180,
        resizeMode: 'cover',
    },
});

export default Search;
