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

    }
  }
 

  backAction = () => {
    Actions.pop()
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

  render() {

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
 

          <View style={{width:width,justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:22,paddingRight:26,paddingVertical:22,position:'absolute',top:0}}>
              <Icon onPress={() => { this.backAction() }} name="left" type="AntDesign" style={{ color: "black", fontSize: 21 }} />
          </View>


          <Text style={{color:'#533b3b',fontWeight:'bold',fontSize:15}}>I am From {this.props.location}</Text>
          
        </View>

    )
}}