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
import Swiper from 'react-native-swiper'
import HomeHot from './HomeHot';

const {width,height}=Dimensions.get('window');

class HomeHotPaySection extends React.Component {
  render() {
    return (
      <View>
        <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold',fontSize:25}}>무료 스티커 순위</Text>
        <Swiper style={{height:360}} showsPagination={false}>
          <Section/>
          <Section/>
        </Swiper>
      </View>
      
    );
  }
}
//120*3+35

const Section = ()=>(
  <View style={{witdh:width}}>
    <HomeHot/>
    <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
    <HomeHot/>
    <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
    <HomeHot/>
  </View>
);

const styles = StyleSheet.create({
  
});

export default HomeHotPaySection;