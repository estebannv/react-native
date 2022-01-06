import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import React, { Component } from "react";

class Bar extends Component {

    render() {
        return (
            <View >
                <View style={styles.container}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.toggle()}>
                        <Image
                            style={styles.menu_icon}
                            source={require("../../assets/menu_icon.png")}
                        />
                    </TouchableWithoutFeedback>

                    <Image
                        style={styles.logo}
                        source={require("../../assets/logo.jpg")}
                    />
                    <Image
                        style={styles.seach_icon}
                        source={require("../../assets/search_icon.png")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#000000"
    },
    logo: {
        width: 100,
        height: 60,
    },
    seach_icon: {
        width: 30,
        height: 35,
        marginRight: 7,
    },
    menu_icon: {
        marginLeft: 7,
        width: 25,
        height: 35,
    },
});

export default Bar;