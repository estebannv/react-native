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
        "image": 'https://m.media-amazon.com/images/I/31+2RlF0NwL._AC_.jpg'
    },
    {
        "key": 3,
        "name": "Blacklist",
        "image": 'https://es.web.img3.acsta.net/pictures/19/08/29/09/30/2548353.jpg'
    },
    {
        "key": 4,
        "name": "The Walking Dead",
        "image": 'https://i.pinimg.com/originals/e2/fd/ac/e2fdac24323a419ee9a2244662383c0f.jpg'
    },
    {
        "key": 5,
        "name": "Flash",
        "image": 'https://i.pinimg.com/736x/45/1a/a9/451aa9cacbb16cd345026eee9ac4ff2d.jpg'
    },
    {
        "key": 6,
        "name": "The Witcher",
        "image": 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-witcher-imagenes-y-poster-1562002627.jpeg'
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
            </View>
        );
    }

    render() {
        return (
            <View>
                <Text
                    style={styles.list_text}
                >{this.props.name}</Text>
                <FlatList
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ margin: 5 }}></View>}
                    data={series_array}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list_text:{
        color: "#FFFFFF",
        marginTop: "3%",
        marginBottom: "3%"
    },
    img: {
        height: 180,
        width: 120,
    },
});

export default List;