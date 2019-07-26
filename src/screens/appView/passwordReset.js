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

class PasswordReset extends Component{
    constructor(props) {
        super(props);
        this.state = {
            step: false,
        }
    }

    render(){
        return(
            this.state.step==false?
            [
                <View style={{flex:1,backgroundColor:'#f4f5f7'}}>
                    <View style={{flex:1,backgroundColor:'#ffffff',margin:wp(5),justifyContent:'center',alignItems:'center'}}>
                        <View style={{position:'absolute',top:0}}>
                            <Heading headingText={'Password Reset'}/>
                        </View>
                        
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
                        style={[Platform.OS == 'ios' ? styles.buttonRedIos : styles.buttonRedAndroid]} onPress={()=>this.setState({step:true})}>
                            <Text style={{color:'#ffffff',fontSize:15}}>Confirm</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

            ]:[

                <View style={{flex:1,backgroundColor:'#f4f5f7'}}>
                    <View style={{flex:1,backgroundColor:'#ffffff',margin:wp(5),justifyContent:'center',alignItems:'center'}}>
                        <View style={{position:'absolute',top:0}}>
                            <Heading headingText={'Password Reset'}/>
                        </View>

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
                        style={[Platform.OS == 'ios' ? styles.buttonRedIos : styles.buttonRedAndroid]}>
                            <Text style={{color:'#ffffff',fontSize:15}}>Confirm</Text>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            ]
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
        marginTop:hp(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    inputName:{
        color:'#5f3789',
        fontSize:17,
        marginLeft:wp(5),
        fontWeight:'bold',
    },
    smallInputField: {
        borderRadius:5,
        backgroundColor:'#f4f5f7',
        flexDirection:'row',
        alignItems:'center',
        elevation:2,
        overflow:'hidden'
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

        marginTop: hp('5')

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
        marginTop: hp('5')
    },
})

export default PasswordReset;