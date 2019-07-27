import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'

import StepIndicator from 'react-native-step-indicator';

const labels = ["Cart","Delivery Address","Order Summary",];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#c1c7d0',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#5f3789',
  stepStrokeUnFinishedColor: '#c1c7d0',
  separatorFinishedColor: '#5f3789',
  separatorUnFinishedColor: '#c1c7d0',
  stepIndicatorFinishedColor: '#5f3789',
  stepIndicatorUnFinishedColor: '#c1c7d0',
  stepIndicatorCurrentColor: '#c1c7d0',
  
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: '#fe7013',
//   stepIndicatorLabelFinishedColor: '#ffffff',
//   stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//   labelColor: '#999999',
//   labelSize: 13,
//   currentStepLabelColor: '#fe7013',
}




//*************** Header Component ***************//

export const Heading=(props)=>{
    return(
        <View style={{width:wp(90),alignItems:'center'}}>
            <Text style={{color:'#253858',fontSize:20,fontWeight:'bold',marginTop:hp(2)}}>{props.headingText}</Text>
            <View style={{marginTop:hp(2),height:wp(0.2),width:wp(90),backgroundColor:'#ebecf0'}}/>
        </View>
    )
}


//**************** Step Indicator Component ************//

export const SocialStepComponent=(props)=>{
    return(
        <View style={{marginTop:hp(3)}}>

            <StepIndicator
                stepCount={3}
                customStyles={customStyles}
                currentPosition={props.position}
            />
            <Text style={{color:'#5e6c84',fontSize:17,marginTop:hp(3),width:wp(80),textAlign:'center',alignSelf:'center'}}>{props.bodyText}</Text>

        </View>
    )
}


//****************** Main Body Component ******************//

class Social extends Component{
constructor(props) {
    super(props)
    this.state = {
        currentSocialPage:1,
        currentPosition: 1,
        bodyText:'Lorem ipsum dolor sit ametpri te sumo dolor sit ametpri te sumo Lorem ipsum dolor sit ametpri te sumo dolor sit ametpri te sumo Lorem ipsum dolor sit ametpri te sumo.'
    }
}

onPageChange(position){
    this.setState({currentPosition: position});
}

render() {

    const socialPage1=
            <View style={{marginTop:hp(3),alignSelf:'center'}}>
                <View style={styles.smallInputField}>
                    <View style={{height:wp(12),width:wp(12),backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../assets/hash1.png')} style={{width:wp(7),height:wp(7)}} resizeMode='contain'/>
                    </View>
                    <TextInput
                        placeholder='Input...' placeholderTextColor='#505f79'
                        autoCapitalize='none'
                        //keyboardType="email-address"
                        style={styles.smallInput}
                        onChangeText={(value) => this.setState({ password: value })}
                    />
                </View>
                    

                <TouchableOpacity 
                // onPress={()=>this.props.navigation.navigate('DashboardScreen')}
                    style={[Platform.OS == 'ios' ? styles.buttonRedIos : styles.buttonRedAndroid]} onPress={()=>this.setState({currentSocialPage:2,currentPosition:2})}>
                    <Text style={{color:'#ffffff',fontSize:15}}>Confirm</Text>
                </TouchableOpacity>
            </View>

    const socialPage2=
            <View style={{marginTop:hp(3),alignSelf:'center'}}>
                <View style={styles.smallInputField}>
                    <View style={{height:wp(12),width:wp(12),backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../assets/hash1.png')} style={{width:wp(7),height:wp(7)}} resizeMode='contain'/>
                    </View>
                    <TextInput
                        placeholder='Input...' placeholderTextColor='#505f79'
                        autoCapitalize='none'
                        //keyboardType="email-address"
                        style={styles.smallInput}
                        onChangeText={(value) => this.setState({ password: value })}
                    />
                </View>

                <View style={[styles.smallInputField,{marginTop:hp(3)}]}>
                    <View style={{height:wp(12),width:wp(12),backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../assets/hash1.png')} style={{width:wp(7),height:wp(7)}} resizeMode='contain'/>
                    </View>
                    <TextInput
                        placeholder='Input...' placeholderTextColor='#505f79'
                        autoCapitalize='none'
                        //keyboardType="email-address"
                        style={styles.smallInput}
                        onChangeText={(value) => this.setState({ password: value })}
                    />
                </View>
                    

                <TouchableOpacity 
                // onPress={()=>this.props.navigation.navigate('DashboardScreen')}
                    style={[Platform.OS == 'ios' ? styles.buttonRedIos : styles.buttonRedAndroid]} onPress={()=>this.setState({currentPosition:3})}>
                    <Text style={{color:'#ffffff',fontSize:15}}>Confirm</Text>
                </TouchableOpacity>
            </View>

    let SelectedPage;
    if(this.state.currentSocialPage==1){
        SelectedPage=socialPage1
    }else{
        SelectedPage=socialPage2
    }

  return (
      <View style={{flex:1,backgroundColor:'#f4f5f7',padding:wp(5)}}>
        <View style={{flex:1,alignItems:'center',backgroundColor:'#ffffff'}}>
            <ScrollView>
            <Heading headingText={'Join Social'}/>
            <SocialStepComponent bodyText={this.state.bodyText} position={this.state.currentPosition}/>
            
            <View>{SelectedPage}</View>
            </ScrollView>
        </View>
      </View>
  )
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        backgroundColor:'#f4f5f7',
        marginTop:hp(5)
    },
    smallInputField: {
        borderRadius:5,
        backgroundColor:'#f4f5f7',
        flexDirection:'row',
        alignItems:'center',
        elevation:2,
        overflow:'hidden',
    },
    smallInput: {
        color: '#505f79',
        fontSize: 15, 
        fontWeight: '300',
        height: wp('12'),
        width: wp('60'),
        marginLeft:wp(2),
    },
    buttonRedIos: {
        width: wp('40'),
        height: wp('12'),
        backgroundColor: '#5f3789',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: wp('4'),
        alignSelf:'center',
        marginLeft:wp(1),

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#c5c4c4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

        marginTop: hp('3')

    },
    buttonRedAndroid: {
        width: wp('40'),
        height: wp('12'),
        backgroundColor: '#5f3789',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: wp('4'),
        alignSelf:'center',
        marginLeft:wp(1),

        elevation: 3,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: hp('3')
    },
})

export default Social