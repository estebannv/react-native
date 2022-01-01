import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { Component } from "react";

const series_array = [
    {
        "key": 1,
        "name": "Dark",
        "image": 'https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        "key": 2,
        "name": "Daredevil",
        "image": 'https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        "key": 3,
        "name": "Blacklist",
        "image": 'https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        "key": 4,
        "name": "The Walking Dead",
        "image": 'https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        "key": 5,
        "name": "Flash",
        "image": 'https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        "key": 6,
        "name": "The Mandalorian",
        "image": 'https://m.media-amazon.com/images/M/MV5BYTZmNTg3ZWYtZTQ1ZC00OTliLWFlNjQtODk1YzQ4NGI5ZmNlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    }
]

class List extends Component {

    renderItem = (item) => {
        return (
            <View>
                <Image
                    style={styles.img}
                    source={{ 
                        uri: item.image
                    }}
                />
                
                <Text>{item.name}</Text>
            </View>
        );
    }

    

render() {
    return (
        <View>
            <FlatList
                horizontal
                data={series_array}
                renderItem={({ item }) => this.renderItem(item)}
            />
        </View>
    );
}
}

const styles = StyleSheet.create({
    img: {
        height: 120,
        width: 180,
    },
});

export default List;