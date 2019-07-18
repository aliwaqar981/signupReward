
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

import { createStackNavigator,createAppContainer } from 'react-navigation';
import Signup from './src/screens/auth/signup'
import Signin from './src/screens/auth/signin'
import RewardStatus from './src/screens/rewardStatus'

const MainNavigator  = createStackNavigator({
  SignupScreen: { screen: Signup },
  SigninScreen: { screen: Signin },
  RewardScreen: {screen:RewardStatus},
});

const App = createAppContainer(MainNavigator);

export default App;

