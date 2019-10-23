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


class HomeHot extends React.Component {
  render() {
    return (
      <View style={{height:120,flexDirection:'row',alignItems:'center'}}>
        <Image source={{uri: 'https://i.pinimg.com/originals/ac/95/2e/ac952e8833ff7210249b675456e58f37.gif'}}
        style={{width:90,height:90,backgroundColor:'gray',marginLeft:20}}/>
        <View style={{height:90,marginLeft:5}}>
          <Text style={{marginTop:17,fontSize:20}}>1</Text>
        </View>
        <View style={{height:90}}>
          <View style={{width:width/100*43}}>
            <Text style={{marginLeft:10,marginTop:20,fontSize:20,letterSpacing: 1}} numberOfLines={1} ellipsizeMode={'tail'}>오버액션가가토끼</Text>
          </View>
          
          <Text style={{marginLeft:15,marginTop:15,fontSize:15,color:'gray',letterSpacing: 1}}>애소</Text>
        </View>
        <View style={{marginTop:15,height:30,width:80,borderColor:'orange',borderRadius:20,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:15, color:'#FF3F00',fontWeight:'100',letterSpacing: 2}}>$0.9</Text>
        </View>
      </View>
    );
  }
}
//ellipsizeMode
//numberOfLines
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

export default HomeHot;