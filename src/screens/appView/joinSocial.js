import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
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



export const SocialStepComponent=(props)=>{
    return(
        <View style={styles.container}>
            <Text style={{color:'#253858',fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:hp(2),marginBottom:hp(5)}}>{props.heading}</Text>
            
            <StepIndicator
                stepCount={3}
                customStyles={customStyles}
                currentPosition={props.position}
            />

            <Text style={{color:'#5e6c84',fontSize:17,marginTop:hp(5),width:wp(80),textAlign:'center',alignSelf:'center'}}>{props.bodyText}</Text>

        </View>
    )
}


class Social extends Component{
constructor(props) {
    super(props)
    this.state = {
        currentPosition: 1,
        headingText:'Join Social',
        bodyText:'Lorem ipsum dolor sit ametpri te sumo dolor sit ametpri te sumo Lorem ipsum dolor sit ametpri te sumo dolor sit ametpri te sumo Lorem ipsum dolor sit ametpri te sumo.'
    }
}

onPageChange(position){
    this.setState({currentPosition: position});
}

render() {
  return (
      <SocialStepComponent heading={this.state.headingText} bodyText={this.state.bodyText} position={this.state.currentPosition}/>
  )
}

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        backgroundColor:'#f4f5f7'
    }
})

export default Social