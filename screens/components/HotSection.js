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
import { API_URL } from '../../constants';
const {width,height}=Dimensions.get('screen');



class HotSection extends React.Component {
  static propTypes={
    data:PropTypes.array.isRequired,
    number:PropTypes.number.isRequired,
  };
  render() {
    const { data,number } = this.props;
    return (
      <View>
        <View style={{height:120,flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginLeft:20,fontSize:22}}>{number}</Text>
            <Image source={{uri: `${API_URL}/load?path=${data.typicalEmoji}`}}
            style={{width:90,height:90,marginLeft:10}}/>
            <View style={{height:90}}>
            <View style={{width:width/100*64}}>
              <Text style={{marginLeft:20,marginTop:10,fontSize:13,letterSpacing: 1}} numberOfLines={2} ellipsizeMode={'tail'}>{data.packname}</Text>
            </View>
            <Text style={{marginLeft:20,marginTop:5,fontSize:10,color:'gray'}}>{data.author.nick}</Text>
            <View style={{marginLeft:20,marginTop:15,height:25,width:50,borderColor:'orange',borderRadius:20,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
              {
                data.isFree?<Text style={{fontSize:12, color:'#FF3F00'}}>{"free"}</Text>
                :
                <Text style={{fontSize:12, color:'#FF3F00'}}>{"$ "+data.price}</Text>}
                
            </View>
            </View>
        </View>
        <View style={{marginLeft:110,width:width-130,height:1,backgroundColor:'#f1f3f5'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default HotSection;