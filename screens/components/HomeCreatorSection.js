import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper'

const {width,height}=Dimensions.get('screen');
const SwiperHight = width/375*100+(width-40)/7+110

class HomeCreator extends React.Component {
  static propTypes = {
    
  };
  render() {
    const {  
    } = this.props;
    return (
    <View style={{width:width}}>
      <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold',fontSize:25}}>DK 작가님의 스티커들</Text>
      <Swiper style={{height:SwiperHight}} showsPagination={false}>
        <Section/>
        <Section/>
      </Swiper>
      
    </View>
    );
  }
}

const Section=()=>(
  <View style={{width:width, alignItems:'center'}}>
        <View style={{marginTop:20, width:width-20, alignItems:'center',backgroundColor:'#FFF3DB',borderRadius:20,}}>
          <Image source={{uri: 'https://i.pinimg.com/originals/da/83/3a/da833a1236a3b917e1951533d02ec245.gif'}}
          style={{width:width/375*100,height:width/375*100,marginTop:10}}/>
          <View style={{marginTop:5,width:width/3*2,alignItems:'center'}}>
            <Text style={{fontSize:20,letterSpacing: 1}} numberOfLines={2}>MOLANG</Text>
          </View>
          <View style={{marginTop:5,width:width-40,backgroundColor:'#ffffff',flexDirection:'row',justifyContent:'space-between',padding:10,marginBottom:20,borderRadius:20}}>
            <Image source={{uri: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F211D463C577A5FBD02'}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2166B933584C237124'}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri: 'http://upload2.inven.co.kr/upload/2017/03/22/bbs/i14270640815.gif'}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri: 'https://t1.daumcdn.net/cfile/tistory/27742134582D3B1518'}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri: 'http://appdata.hungryapp.co.kr/data_file/data_img/201803/29/W152233532706435100.gif'}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
          </View>
        </View>
      </View>
)
const styles = StyleSheet.create({
  
});

export default HomeCreator;