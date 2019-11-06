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
import PropTypes from 'prop-types';

const {width,height}=Dimensions.get('window');

class HomeHotFreeSection extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    freeEmojiTop9:PropTypes.array.isRequired,
  };
  render() {
    const { freeEmojiTop9,navigation } = this.props
    return (
      <View>
        <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold',fontSize:25}}>무료 스티커 순위</Text>
        <Swiper style={{height:360}} showsPagination={false}>
          <Section data1={freeEmojiTop9[0]} data2={freeEmojiTop9[1]} data3={freeEmojiTop9[2]} number={1} navigation={navigation}/>
          <Section data1={freeEmojiTop9[3]} data2={freeEmojiTop9[4]} data3={freeEmojiTop9[5]} number={4} navigation={navigation}/>
          <Section data1={freeEmojiTop9[6]} data2={freeEmojiTop9[7]} data3={freeEmojiTop9[8]} number={7} navigation={navigation}/>
        </Swiper>
      </View>
      
    );
  }
}


const Section = (props)=>(
  <View style={{witdh:width}}>
    <HomeHot data={props.data1} number={props.number} navigation={props.navigation}/>
    <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
    <HomeHot data={props.data2} number={props.number+1} navigation={props.navigation}/>
    <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
    <HomeHot data={props.data3} number={props.number+2} navigation={props.navigation}/>
  </View>
);

const styles = StyleSheet.create({
  
});

export default HomeHotFreeSection;