import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Drawer from 'react-native-drawer'
import {withNavigation} from 'react-navigation'

class ControlPanel extends Component{
    render(){
        return(
            <ImageBackground source={require('../../assets/adminH.png')} style={{flex:1}}>
                <View style={{width:wp(40),height:wp(14),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={styles.DrawerOptionText}>ADMIN</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.closeDrawer()}>
                        <Image source={require('../../assets/menu.png')} style={{width:wp(5),height:wp(5),marginRight:wp(5)}} resizeMode='contain'/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.DrawerOption,{marginTop:hp(15)}]} onPress={()=>this.props.navigation.navigate('MenuScreen')}>
                    <Image source={require('../../assets/dashboard.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.DrawerOption}>
                    <Image source={require('../../assets/flame.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Compain</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.DrawerOption} onPress={()=>this.props.navigation.navigate('Screen3')}>
                    <Image source={require('../../assets/reward.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Reward</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.DrawerOption} onPress={()=>this.props.navigation.navigate('Screen4')}>
                    <Image source={require('../../assets/list.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Specs</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.DrawerOption} onPress={()=>this.props.navigation.navigate('Screen5')}>
                    <Image source={require('../../assets/tag.png')} style={{width:wp(5),height:wp(5)}} resizeMode='contain'/>
                    <Text style={styles.DrawerOptionText}>Deposit</Text>
                </TouchableOpacity>
            </ImageBackground>
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

export default ControlPanel