import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Drawer from 'react-native-drawer'
import {withNavigation} from 'react-navigation'

class MenuPanel extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#5f3789',alignItems:'center'}}>
                <View style={{marginTop:hp(5),borderRadius:2,width:wp(14),height:wp(14),backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20}}>tag</Text>
                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SocialScreen')} style={[styles.DrawerOption,{marginTop:hp(10)}]}>
                    <Image source={require('../../assets/dashboard.png')} style={{width:wp(7),height:wp(7)}} resizeMode='contain'/>
                </TouchableOpacity>
                <View style={styles.horizontalDash}/>

                <TouchableOpacity style={styles.DrawerOption}>
                    <Image source={require('../../assets/flame.png')} style={{width:wp(7),height:wp(7)}} resizeMode='contain'/>
                </TouchableOpacity>
                <View style={styles.horizontalDash}/>

                <TouchableOpacity style={styles.DrawerOption} onPress={()=>this.props.navigation.navigate('MenuScreen')}>
                    <Image source={require('../../assets/reward.png')} style={{width:wp(7),height:wp(7)}} resizeMode='contain'/>
                </TouchableOpacity>
                <View style={styles.horizontalDash}/>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('PasswordResetScreen')} style={{width:wp(10),height:wp(10),borderRadius:wp(5),marginTop:hp(7),backgroundColor:'#9aad12'}}>
                </TouchableOpacity>

            
                <TouchableOpacity onPress={()=>{this._drawer.open()}} style={{height:wp(12),width:wp(20),alignItems:'center',backgroundColor:'#172b4d',justifyContent:'center',alignItems:'center',position:'absolute',bottom:0}}>
                    <Image source={require('../../assets/reward.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    DrawerOption:{
        marginTop:hp(5),
        flexDirection:'row',
        alignItems:'center',
        //marginLeft:wp(5)
    },
    DrawerOptionText:{
        color:'#a5adba',
        fontSize:15,
        marginLeft:wp(3),
    },
    horizontalDash:{
        height:1,
        width:wp(10),
        backgroundColor:'#3f0b58',
        marginTop:hp(2)
    }
})

export default withNavigation(MenuPanel);