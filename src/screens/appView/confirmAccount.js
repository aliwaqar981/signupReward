import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, FlatList} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'


export const Heading=(props)=>{
        return(
            <View style={{width:wp(90)}}>
                <Text style={{color:'#253858',fontSize:20,fontWeight:'bold',marginLeft:wp(4),marginTop:hp(2)}}>{props.headingText}</Text>
                <View style={{marginTop:hp(2),height:wp(0.2),width:wp(90),backgroundColor:'#ebecf0'}}/>
            </View>
        )
} 

class ConfirmAccount extends Component{
    constructor(props) {
        super(props);
        this.state = {
            acountConfirmation: true,
        }
    }

    render(){

        let acountConfirmationText
        if(this.state.acountConfirmation==true){
            acountConfirmationText=  <Text style={styles.TextThree}>Confirmed</Text>
        }else{
            acountConfirmationText=  <Text style={[styles.TextThree,{color:'red'}]}>Pending</Text>
        }

        return(
            <View style={{flex:1,backgroundColor:'#f4f5f7'}}>
                <View style={{flex:1,backgroundColor:'#ffffff',margin:wp(5),alignItems:'center'}}>
                    <View>
                        <Heading headingText={'Confirm Account'}/>
                    </View>
                    
                    <View style={{backgroundColor:'#f4f5f7',marginTop:hp(5)}}>
                        <View style={styles.rowContainer}>
                            <Text style={[styles.TitleTextOne,{width:wp(20)}]}>ACCOUNT</Text>
                        </View>

                        <View style={[styles.rowContainer,{backgroundColor:'#ffffff'}]}>
                            <Text style={[styles.TitleTextTwo,{width:wp(20)}]}>Address</Text>
                            <Text style={[styles.TitleTextOne,{overflow:'hidden',textAlign:'center'}]}>Lorem ipsum dolor sit ametpri te</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={[styles.TitleTextTwo,{width:wp(20)}]}>Status</Text>
                            {acountConfirmationText}
                        </View>

                        <View style={[styles.rowContainer,{backgroundColor:'#ffffff'}]}>
                            <Text style={[styles.TitleTextOne,{width:wp(20)}]}>PROFILE</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={[styles.TitleTextTwo,{width:wp(20)}]}>Name</Text>
                            <Text style={[styles.TitleTextOne,{overflow:'hidden',textAlign:'center'}]}>Andre Gomez</Text>
                        </View>

                        <View style={[styles.rowContainer,{backgroundColor:'#ffffff'}]}>
                            <Text style={[styles.TitleTextTwo,{width:wp(20)}]}>Email</Text>
                            <Text style={[styles.TitleTextOne,{overflow:'hidden',textAlign:'center'}]}>abc@gmail.com</Text>
                        </View>
                        
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    rowContainer:{
        width:wp(80),
        flexDirection:'row',
        paddingVertical:hp(2),
        paddingHorizontal:wp(2)
    },
    TitleTextOne:{
        color:'#505f79',
        fontSize:14
    },
    TitleTextTwo:{
        color:'#5f3789',
        fontSize:14,
        fontWeight:'bold',
    },
    TextThree:{
        color:'#9aad12',
        fontSize:14,
        fontWeight:'bold'
    }
})

export default ConfirmAccount;