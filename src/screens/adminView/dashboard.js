import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Platform, ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../helpers/Responsive'
import Drawer from 'react-native-drawer'
import ControlPanel from './controlPanel'
import DashBody from './dashBody'

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';


class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
          //? states for drawer
          // drawerType: "overlay",
          // openDrawerOffset: 0.6,
          // closedDrawerOffset: 0,
    
          // relativeDrag: false,
          // panThreshold: 0.25,
          // tweenHandlerOn: false,
          // tweenDuration: 350,
          // tweenEasing: "linear",
          // disabled: false,
          // tweenHandlerPreset: null,
          // acceptDoubleTap: false,
          // acceptTap: false,
          // acceptPan: false,
          // tapToClose: true,
          // negotiatePan: false,
          //side: "right",
        }}


    // closeControlPanel = () => {
    //     this._drawer.close()
    //   };
    //   openControlPanel = () => {
    //     this._drawer.open()
    //   };

    //   tweenHandler(ratio) {
    //     if (!this.state.tweenHandlerPreset) {
    //       return {};
    //     }
    //     return tweens[this.state.tweenHandlerPreset](ratio);
    //   }

    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };

    render(){

        // var controlPanel = (
        //     <ControlPanel
        //       lati={this.state.latitudeX}
        //       longi={this.state.longitudeX}
        //       closeDrawer={() => {
        //         this.drawer.close();
        //       }}
        //     />
        //);
        

        return(
      //       <Drawer
      //       ref={c => (this._drawer = c)}
      //       type={this.state.drawerType}
      //       animation={this.state.animation}
      //       openDrawerOffset={this.state.openDrawerOffset}
      //       closedDrawerOffset={this.state.closedDrawerOffset}
      //       // panOpenMask={this.state.panOpenMask}
      //       // panCloseMask={this.state.panCloseMask}
      //       relativeDrag={this.state.relativeDrag}
      //       panThreshold={this.state.panThreshold}
      //       content={controlPanel}
      //       styles={{
      //       shadowColor: "#000000",
      //       shadowOpacity: 0.8,
      //       shadowRadius: 0,
      //       }}
      //       disabled={this.state.disabled}
      //       tweenHandler={this.tweenHandler.bind(this)}
      //       tweenDuration={this.state.tweenDuration}
      //       tweenEasing={this.state.tweenEasing}
      //       acceptDoubleTap={this.state.acceptDoubleTap}
      //       acceptTap={this.state.acceptTap}
      //       acceptPan={this.state.acceptPan}
      //       tapToClose={this.state.tapToClose}
      //       negotiatePan={this.state.negotiatePan}
      //       changeVal={this.state.changeVal}
      //       side={this.state.side}
      //       useInteractionManager="true"
      //   >
      //   <View style={{flex:1,backgroundColor:'#f4f5f7'}}>
      //       <View style={{width:wp(100),height:wp(20),backgroundColor:'#172b4d',alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
      //               <TouchableOpacity style={{marginLeft:wp(5),position:'absolute',left:0}} onPress={()=>{this._drawer.open()}}>
      //                   <Image source={require('../../assets/menu.png')} style={{width:wp(5),height:wp(5),marginRight:wp(5)}} resizeMode='contain'/>
      //               </TouchableOpacity>
      //               <Text style={styles.headerText}>Specs</Text>
                
      //       </View>

      //       <View style={{flex:1,backgroundColor:'#ffffff',margin:wp(5)}}>
      //           <DashBody/>
      //       </View>
      //   </View>
      // </Drawer>
      <ImageBackground source={require('../../assets/headerBackground.png')} style={{width:wp(104),left:-8,height:wp(20)}} resizeMode={'cover'}>
       <View style={{ flexDirection: 'row',alignItems:'center',flex:1 }}>

          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/* <Image
              source={require('../../assets/menuBlue.png')}
              style={{ width:wp(10), height: wp(10), marginLeft: wp(5) }}
          /> */}
          <Image source={require('../../assets/menu.png')} style={{width:wp(6),height:wp(6),marginLeft:wp(8)}} resizeMode='contain'/>

          </TouchableOpacity>
          <Text style={{color:'#253858',fontSize:14,marginLeft:wp(5),alignSelf:'center'}}>{this.props.headerText}</Text>
      </View>
          
          </ImageBackground>

        );
    }
}


const Screen1_StackNavigator = createStackNavigator({
  Specs: {
    screen: DashBody,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Dashboard navigationProps={navigation} headerText={'Specs'} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#253858',
    }),
  },
});



const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    screen: Screen1_StackNavigator,
    navigationOptions:{
      drawerLabel:()=>null
  }
  },
},
{
  drawerWidth:wp(40),
  contentComponent:ControlPanel  // Menu Panel is Custom Component
},
)



const styles=StyleSheet.create({
    DrawerOptionText:{
        color:'#a5adba',
        fontSize:15,
        marginLeft:wp(5),
       // marginTop:hp(2)
    },
    headerText:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    }
})

//export default Dashboard;

export default createAppContainer(DrawerNavigatorExample);
