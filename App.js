
import React, {Component,Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator,createAppContainer,createSwitchNavigator } from 'react-navigation';
import Signup from './src/screens/auth/signup'
import Signin from './src/screens/auth/signin'
import RewardStatus from './src/screens/rewardStatus'
import Dashboard from './src/screens/dashboard'

const MainNavigator  = createSwitchNavigator({
  SignupScreen: Signup ,
  SigninScreen: Signin ,
  RewardScreen: RewardStatus,
  DashboardScreen: Dashboard,
},
{
  initialRouteName: 'SigninScreen',
});

const App = createAppContainer(MainNavigator);

export default App;

