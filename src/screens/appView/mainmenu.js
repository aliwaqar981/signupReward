import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Drawer from 'react-native-drawer'
import MenuPanel from './menuPanel'
import RewardStatus from './rewardStatus';
import PasswordReset from '../../screens/appView/passwordReset'
import Social from './joinSocial'
import ConfirmAccount from './confirmAccount'

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';




class MainMenu extends Component{

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render(){
    return(
      ////// This is the Code for Header in Drwaer which every tab will use /////

      <View style={{ flexDirection: 'row',justifyContent:'center' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
              source={require('../../assets/menuBlue.png')}
              style={{ width:wp(10), height: wp(10), marginLeft: wp(5) }}
          />
          </TouchableOpacity>
          <Text style={{color:'#253858',fontSize:14,marginLeft:wp(5),alignSelf:'center'}}>{this.props.headerText}</Text>
      </View>
    )
  }
}




////////////////////// Drawer Navigation for App View //////////////////

const Screen1_StackNavigator = createStackNavigator({
  Reward: {
    screen: RewardStatus,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MainMenu navigationProps={navigation} headerText={'Reward Status'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#253858',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Password: {
    screen: PasswordReset,
    navigationOptions: ({ navigation }) => ({
      //title: 'Demo Screen 2',
      headerLeft: <MainMenu navigationProps={navigation} headerText={'Password Reset'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  Social: {
    screen: Social,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MainMenu navigationProps={navigation} headerText={'Join Social'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  AccountConfirm: {
    screen: ConfirmAccount,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MainMenu navigationProps={navigation} headerText={'Confirm Account'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#fff',
    }),
  },
});



////// Above created StackNavigators for every screen in Drawer ////////
////// Now below are the routes which are using above Stacks    ////////  

const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    screen: Screen1_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
  }
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions:{
        drawerLabel:()=>null
    }
  },
  Screen3:{
    screen:Screen3_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
    }
  },
  Screen4:{
    screen:Screen4_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
    }
  },
},
{
  drawerWidth:wp(20),
  contentComponent:MenuPanel  // Menu Panel is Custom Component
},

);



const styles=StyleSheet.create({
    DrawerOptionText:{
        color:'#a5adba',
        fontSize:15,
        marginLeft:wp(5),
    },
    headerText:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    }
})

export default createAppContainer(DrawerNavigatorExample);
