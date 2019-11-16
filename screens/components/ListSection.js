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



class ListSection extends React.Component {
  static propTypes={
    data:PropTypes.object.isRequired,
  };
  render() {
    const { data } = this.props;
    return (
        <View style={{height:120,flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri: `${API_URL}/load?emojiId=${data.typicalEmoji}`}}
            style={{width:90,height:90,marginLeft:20}}/>
            <View style={{height:90}}>
            <View style={{width:width/100*70}}>
              <Text style={{marginLeft:20,marginTop:20,fontSize:15,letterSpacing: 1}} numberOfLines={1} ellipsizeMode={'tail'}>{data.name}</Text>
            </View>
            <Text style={{marginLeft:20,marginTop:5,fontSize:10,color:'gray'}}>{data.author.nick}</Text>
            <View style={{marginLeft:20,marginTop:15,justifyContent:'center'}}>
              {
                data.isFree?<Text style={{fontSize:12, color:'#FF3F00'}}>{"구독 아이템"}</Text>
                :
                <Text style={{fontSize:12, color:'#FF3F00'}}>{"영구 소장 아이템"}</Text>
              }
                
            </View>
            <View style={{marginLeft:10,marginTop:15,width:width-130,height:1,backgroundColor:'#f1f3f5'}}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default ListSection;