import { Row } from 'native-base';
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Keyboard,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
   
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class buttun extends Component { 

  constructor(props) {

    super(props)

    this.state = {
      Butun_Hide:true,
      location:"",
    }
  }
  

  backAction = () => {
    BackHandler.exitApp()
    return true;
  };


  componentWillUnmount() {
    this.backHandler.remove();
  }

  componentDidMount = async () => {
    this.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        this.backAction
      );
  }
  
  keyboardShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
        // alert('Keyboard is open')
        this.setState({Butun_Hide: false,})
    }
  );
   keyboardHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
        // alert('Keyboard is closed')
        this.setState({Butun_Hide: true,})

    }
  );


  render() {

    return(
        <View style={{flex:1}}>

          <View style={{width:width,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:22,paddingRight:26,paddingVertical:22}}>
              <Icon name="left" type="AntDesign" style={{ color: "black", fontSize: 21 }} />
              <TouchableOpacity activeOpacity={0.9} onPress={() => { Actions.Next_one({location:this.state.location}) }}>
                  <Text style={{ color: '#533b3b', fontSize: 15,fontWeight:'400' }}>Skip</Text>
              </TouchableOpacity>
          </View>
          <Text>hello</Text>

          <ScrollView>

          <View style={{alignItems:'center',alignSelf:'center',justifyContent:'flex-end',height:height/4.5}}>
              <Text style={{color: '#533b3b',fontSize:14,fontWeight:'500'}}>Where are you based?</Text>
              <TextInput onChangeText={location => this.setState({ location })} style={{width:width/1-50,alignSelf:'center',borderWidth:1.3,borderColor:'lightgray',borderRadius:8,paddingHorizontal:15,height:39,color:'black',marginTop:15}} placeholder="Ex: London" placeholderTextColor="#918786"/>
          </View>

          </ScrollView>

          {this.state.Butun_Hide == true?
          <View style={{alignItems:'center',justifyContent:'center',position:'absolute',bottom:50,width:width}}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { Actions.Next_one({location:this.state.location}) }}
                 style={{width:width/1-50,height:39,justifyContent:'center',alignItems:'center',borderRadius:7,backgroundColor:"#533b3b",alignSelf:'center'}}>
                 <Text style={{color:'white',fontWeight:'500',fontSize:14}}>Detect automatically</Text>
            </TouchableOpacity>
            {/* d4d0cf */}
            <TouchableOpacity activeOpacity={0.9} onPress={() => { Actions.Next_one({location:this.state.location}) }}
                 style={{width:width/1-50,height:39,justifyContent:'center',alignItems:'center',borderRadius:7,backgroundColor:"#533b3b",alignSelf:'center',marginTop:20}}>
                 <Text style={{color:'white',fontWeight:'500',fontSize:15}}>Continue</Text>
            </TouchableOpacity>
          </View>
          :
          <View></View>
          }
          

        </View>
    )
  }}    


  const styles = StyleSheet.create({

  }) 
