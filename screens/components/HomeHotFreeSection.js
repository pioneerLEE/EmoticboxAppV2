import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
const {width,height}=Dimensions.get('window');
import HomeHot from './HomeHot';


class HomeHotFreeSection extends React.Component {
  render() {
    return (
      <View style={{witdh:width}}>
        <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold',fontSize:25}}>무료 스티커 순위</Text>
        <HomeHot/>
        <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
        <HomeHot/>
        <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
        <HomeHot/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
  },
  header:{
    height: '14%',
    justifyContent:'center'
  },
  headerText:{
    fontSize: 20
  }
});

export default HomeHotFreeSection;