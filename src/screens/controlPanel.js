import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../helpers/Responsive'
import Drawer from 'react-native-drawer'

class ControlPanel extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#452b4d',marginTop:wp(14)}}>
                <TouchableOpacity style={[styles.DrawerOption,{marginTop:hp(15)}]}>
                    <Image source={require('../assets/dashboard.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Dashboard</Text>
                </TouchableOpacity>

                <View style={styles.DrawerOption}>
                    <Image source={require('../assets/flame.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Compain</Text>
                </View>

                <View style={styles.DrawerOption}>
                    <Image source={require('../assets/reward.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Reward</Text>
                </View>

                <View style={styles.DrawerOption}>
                    <Image source={require('../assets/tag.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Specs</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    DrawerOption:{
        marginTop:hp(5),
        flexDirection:'row',
        alignItems:'center',
        marginLeft:wp(5)
    },
    DrawerOptionText:{
        color:'#a5adba',
        fontSize:15,
        marginLeft:wp(3),
    }
})

export default ControlPanel;