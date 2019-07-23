import React, {Component,Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStackNavigator,createAppContainer,createSwitchNavigator,DrawerNavigator } from 'react-navigation';
import Signup from '../src/screens/auth/signup'
import Signin from '../src/screens/auth/signin'
import RewardStatus from '../src/screens/appView/rewardStatus'
import Dashboard from '../src/screens/dashboard'
import MainMenu from '../src/screens/appView/mainmenu'
import PasswordReset from '../src/screens/appView/passwordReset'
import Social from '../src/screens/appView/joinSocial'


const AuthStack = createSwitchNavigator({
    SignupScreen: Signup ,
    SigninScreen: Signin ,
  },
  {
    initialRouteName: 'SigninScreen',
  });
  
  const AppStack = createStackNavigator({
    SocialScreen:{
        screen:Social,
    },
    MenuScreen: {
        screen: MainMenu,
        navigationOptions: {
            header: null
        }
    },
    RewardScreen: {
        screen: RewardStatus,
        navigationOptions: {
            title: 'Instructions'
        }
    },
    DashboardScreen: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },
    PasswordResetScreen:{
        screen: PasswordReset,
        navigationOptions:{
            title:'Password'
        }
    }
    
  });
  
  
  export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'Auth',
    }
  ))