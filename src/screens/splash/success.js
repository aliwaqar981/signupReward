import React from 'react';
import LottieView from 'lottie-react-native';
import {Animated,Easing,ImageBackground,Text} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'


export default class SuccessAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
      }
    
      componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }).start();
        setTimeout(
          ()=>{
            this.props.navigation.navigate('DashboardScreen')
          },3000
        )
      }
    
      render() {
        return (
            <ImageBackground source={require('../../assets/appview.png')} style={{flex:1,justifyContent:'center',alignItems:'center'}} resizeMode={'cover'}>
                <LottieView style={{width:wp(30),height:wp(30)}} source={require('../../assets/animation/success.json')} progress={this.state.progress} />
                <Text style={{color:'#ffffff',fontSize:28,fontWeight:'bold'}}>Received</Text>
                <Text style={{color:'#ffffff',fontSize:12,fontWeight:'400',width:wp(70),textAlign:'center'}}>Lorem ipsum dolor sit amet, agam aperiam oporteat ei pro</Text>
            </ImageBackground>
        );
      }
}

