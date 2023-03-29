import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    TouchableOpacity, TextInput,
    Alert, ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            studyState : "",
            activtyState : "",
            sportsState : "",
            toDoState : "",
           
        }
    }
    render() {
        return (
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.droidSafeArea}
                />
                <ImageBackground
                    source={require("../assets/addBg.png")}
                    style={styles.imageBackgroundStyle}
                >
                
                <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ venue: text })}
                                placeholder={"Travel Cost"}
                                placeholderTextColor={""}
                                autoFocus
                            />


                    <Text>Profile</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
       
    },
    imageBackgroundStyle: {
        resizeMode: "cover",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }

})