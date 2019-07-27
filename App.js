
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
import RewardStatus from './src/screens/appView/rewardStatus'
import MainMenu from './src/screens/appView/mainmenu'

import AppNavigation from './navigation/AppNavigation'
// const MainNavigator  = createSwitchNavigator({
//   SignupScreen: Signup ,
//   SigninScreen: Signin ,
//   RewardScreen: RewardStatus,
//   DashboardScreen: Dashboard,
//   MenuScreen:MainMenu,
// },
// {
//   initialRouteName: 'SigninScreen',
// });

// const App = createAppContainer(MainNavigator);

// export default App;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigation />
    );
  }
}