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


class HomeEndSection extends React.Component {
  render() {
    return (
      <View style={{height:70,flexDirection:'row',justifyContent:'center',marginTop:10}}>
        <Text style={{margin:20,fontSize:10,fontWeight:'100',color:'#999999'}}>스티커등록</Text>
        <Text style={{margin:20,fontSize:10,fontWeight:'100',color:'#999999'}}>이용안내</Text>
        <Text style={{margin:20,fontSize:10,fontWeight:'100',color:'#999999'}}>신고하기</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
  },
});

export default HomeEndSection;