import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {
        height: 250
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    img:{
        flex: 1
    }
})

export default class SwiperComponent extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} autoplay showsPagination={false}>
                <View style={styles.slide1}>
                    <Image
                    style={styles.img}
                        source={{
                            uri: 'https://tierragamer.com/wp-content/uploads/2017/07/strangerthingsposter-1.jpg'
                        }}
                    />
                </View>
                <View style={styles.slide2}>
                <Image
                    style={styles.img}
                        source={{
                            uri: 'https://christhilk.files.wordpress.com/2017/11/thor-banner.jpg'
                        }}
                    />
                </View>
                <View style={styles.slide3}>
                <Image
                    style={styles.img}
                        source={{
                            uri: 'https://briansfilmlog.files.wordpress.com/2011/05/iron-man-2-review-main.png'
                        }}
                    />
                </View>
            </Swiper>
        )
    }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)