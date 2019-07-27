import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

class Deposit extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f4f5f7',padding:wp(5)}}>
                <View style={styles.container}>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
})

export default Deposit;