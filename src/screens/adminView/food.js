import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

class FoodReward extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f4f5f7',padding:wp(5)}}>
                <View style={styles.container}>
                    
                    <View style={[styles.rowContainer,{backgroundColor:'#ffffff',marginTop:hp(4)}]}>
                        <Text style={[styles.TitleTextTwo,{width:wp(25)}]}>Header</Text>
                        <Text style={[styles.TitleTextOne,{overflow:'hidden',textAlign:'center'}]}>Lorem ipsum dolor</Text>
                    </View>
                    <View style={{marginTop:hp(2),height:wp(0.2),width:wp(84),backgroundColor:'#ebecf0',alignSelf:'center'}}/>


                    <View style={[styles.rowContainer,{backgroundColor:'#ffffff'}]}>
                        <Text style={[styles.TitleTextTwo,{width:wp(25)}]}>Subheader</Text>
                        <Text style={[styles.TitleTextOne,{overflow:'hidden',textAlign:'center'}]}>Lorem ipsum dolor</Text>
                    </View>
                    <View style={{marginTop:hp(2),height:wp(0.2),width:wp(84),backgroundColor:'#ebecf0',alignSelf:'center'}}/>


                    <View style={[styles.rowContainer,{backgroundColor:'#ffffff'}]}>
                        <Text style={[styles.TitleTextTwo,{width:wp(25)}]}>Body</Text>
                        <Text style={[styles.TitleTextOne,{overflow:'hidden',textAlign:'center'}]}>Lorem ipsum dolor sit ametpri te</Text>
                    </View>
                    <View style={{marginTop:hp(2),height:wp(0.2),width:wp(84),backgroundColor:'#ebecf0',alignSelf:'center'}}/>


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
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    rowContainer:{
        width:wp(80),
        flexDirection:'row',
        paddingVertical:hp(2),
        paddingHorizontal:wp(2),
        marginTop:hp(2)
    },
    TitleTextOne:{
        color:'#505f79',
        fontSize:14
    },
    TitleTextTwo:{
        color:'#5f3789',
        fontSize:14,
        fontWeight:'bold',
    },
})

export default FoodReward;