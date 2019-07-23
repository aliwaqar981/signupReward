import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'


const data=[
    {
        key:1,
        name:'Food'
    },
    {
        key:2,
        name:'Food'
    },
    {
        key:3,
        name:'Food'
    }
]

export const Heading=(props)=>{
    return(
        <View style={{width:wp(90)}}>
            <Text style={{color:'#253858',fontSize:20,fontWeight:'bold',marginLeft:wp(4),marginTop:hp(2)}}>Password Reset</Text>
            <View style={{marginTop:hp(2),height:wp(0.2),width:wp(90),backgroundColor:'#ebecf0'}}/>
        </View>
    )
} 

class RewardStatus extends Component{

    renderList = ({item}) => (
        <View style={styles.rewardCardContainer}>
            <Image source={require('../../assets/f1.jpg')} style={{width:wp(22), height:wp(28)}} resizeMode={'cover'}/>
            <View style={{overflow:'hidden'}}>
                <Text style={styles.headingText}>Food</Text>
                <Text style={[styles.bodyText,{width:wp(35)}]}>Lorem ipsum dolor sit Ametpri te sumo dolor Sit Ametpri te sumo</Text>
            </View>
            <View style={{marginLeft:wp(4),marginTop:hp(1)}}>
                <Text style={{color:'#505f79',fontSize:12}}>AWARD</Text>
                <Text style={{color:'#9aad12', fontSize:20, fontWeight:'bold'}}># 200</Text>
                <TouchableOpacity style={{backgroundColor:'#5f3789', width:wp(18),height:wp(8) ,justifyContent:'center',alignItems:'center',marginTop:hp(1),borderRadius:2}}>
                    <Text style={{color:'#ffffff', fontSize:13}}>Claim</Text>
                </TouchableOpacity>
            </View>
        </View>
      );

    render(){
        return(
            <View style={styles.container}>
                
                <View style={{position:'absolute',top:0}}>
                    <Heading/>
                </View>

                <FlatList
                    data={data}
                    renderItem={this.renderList}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    rewardCardContainer:{
        backgroundColor:'#f4f5f7',
        width:wp(86),
        height:wp(28),
        marginTop:hp(2),
        flexDirection:'row',
        borderRadius:5,
        overflow:'hidden',
    },
    headingText:{
        color:'#091e42',
        fontSize:18,
        marginTop:hp(1),
        marginLeft:wp(4)
    },
    bodyText:{
        color:'#5e6c84',
        fontSize:12,
        marginTop:hp(1),
        marginLeft:wp(4),
        overflow:'hidden'
    }
})

export default RewardStatus;