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
import PropTypes from 'prop-types';
const {width,height}=Dimensions.get('window');
import { API_URL } from '../../constants';

class HomeHot extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    data:PropTypes.object.isRequired,
    number:PropTypes.number.isRequired,
  };
  render() {
    const { data,number,navigation } = this.props
    return (
      <TouchableOpacity style={{height:120,flexDirection:'row',alignItems:'center'}} onPressOut={()=>navigation.navigate('DetailScreen',{emojipackId:data._id})}>
        <Image source={{uri:`${API_URL}/load?path=${data.typicalEmoji}`}}
        style={{width:90,height:90,marginLeft:20,borderRadius:10}}/>
        <View style={{height:90,marginLeft:5}}>
          <Text style={{marginTop:17,fontSize:20}}>{number}</Text>
        </View>
        <View style={{height:90}}>
          <View style={{width:width/100*43}}>
            <Text style={{marginLeft:10,marginTop:20,fontSize:20,letterSpacing: 1}} numberOfLines={1} ellipsizeMode={'tail'}>{data.packname}</Text>
          </View>
          
          <Text style={{marginLeft:15,marginTop:15,fontSize:15,color:'gray',letterSpacing: 1}}>{data.author.nick}</Text>
        </View>
        <View style={{marginTop:15,height:30,width:80,borderColor:'orange',borderRadius:20,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
          {data.isFree?<Text style={{fontSize:15, color:'#FF3F00',fontWeight:'100',letterSpacing: 2}}>free</Text>:<Text style={{fontSize:15, color:'#FF3F00',fontWeight:'100',letterSpacing: 2}}>{"$ "+data.price}</Text>}
        </View>
      </TouchableOpacity>
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