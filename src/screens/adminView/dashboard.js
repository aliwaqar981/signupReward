import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Drawer from 'react-native-drawer'
import ControlPanel from './controlPanel'
import DashBody from './dashBody'
import Deposit from './deposit'
import FoodReward from './food'

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';


class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }}

    toggleDrawer = () => {
      this.props.navigationProps.openDrawer();
    };

    render(){
        return(
            <ImageBackground source={require('../../assets/headerBackground.png')} style={{width:wp(104),left:-8,height:wp(20)}} resizeMode={'cover'}>
              <View style={{ flexDirection: 'row',alignItems:'center',flex:1,justifyContent:'center' }}>

                  <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{position:'absolute',left:0}}>
                    <Image source={require('../../assets/menu.png')} style={{width:wp(6),height:wp(6),marginLeft:wp(8)}} resizeMode='contain'/>
                  </TouchableOpacity>
                  <Text style={{color:'#ffffff',fontSize:22,fontWeight:'bold',marginLeft:wp(5),alignSelf:'center'}}>{this.props.headerText}</Text>
              </View>
                
            </ImageBackground>

        );
    }
}


const Screen3_StackNavigator = createStackNavigator({
  FoodReward: {
    screen: FoodReward,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Dashboard navigationProps={navigation} headerText={'Food'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#253858',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  Specs: {
    screen: DashBody,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Dashboard navigationProps={navigation} headerText={'Specs'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#253858',
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  Deposit: {
    screen: Deposit,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Dashboard navigationProps={navigation} headerText={'Deposit'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#253858',
    }),
  },
});


const DrawerNavigatorExample = createDrawerNavigator({
  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
  }
  },
  Screen4: {
    screen: Screen4_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
  }
  },
  Screen5: {
    screen: Screen5_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
  }
  },
},
{
  drawerWidth:wp(40),
  contentComponent:ControlPanel  // Menu Panel is Custom Component
},
)



const styles=StyleSheet.create({
    DrawerOptionText:{
        color:'#a5adba',
        fontSize:15,
        marginLeft:wp(5),
       // marginTop:hp(2)
    },
    headerText:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    }
})

//export default Dashboard;

export default createAppContainer(DrawerNavigatorExample);
