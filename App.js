import React, { Component } from 'react';
import { useEffect } from 'react';

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
  PermissionsAndroid
} from 'react-native';
import { Router, Scene,Stack } from 'react-native-router-flux';
 
  
import first from "./screens/first";
import Next_one from "./screens/Next_one";

 
console.disableYellowBox = true;

 

export default function App() {

 

 

  return(

    
    <Router>
    <Stack key="root"  >
   
    <Scene key="first" component={first} title="first" initial  hideNavBar={true} />

    <Scene key="Next_one" component={Next_one} title="Next_one"   hideNavBar={true} />
  
    </Stack>
  </Router>
 )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});