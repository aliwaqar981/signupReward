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
import Dashboard from '../src/screens/adminView/dashboard'
import MainMenu from '../src/screens/appView/mainmenu'
import PasswordReset from '../src/screens/appView/passwordReset'
import Social from '../src/screens/appView/joinSocial'
import SuccessAnimation from '../src/screens/splash/success'


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
    },
    SuccessAnimation:{
        screen:SuccessAnimation,
        navigationOptions:{
            header:null
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