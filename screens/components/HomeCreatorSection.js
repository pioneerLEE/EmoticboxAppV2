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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API_URL } from '../../constants';

const {width,height}=Dimensions.get('screen');
const SwiperHight = width/375*100+(width-40)/7+110

class HomeCreator extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    data:PropTypes.array.isRequired
  };
  render() {
    const { navigation,data } = this.props;
    return (
    <View style={{width:width}}>
      <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold',fontSize:25}}>{data[0].author.nick+" 작가님의 스티커들"}</Text>
      <Swiper style={{height:SwiperHight}} showsPagination={false}>
        {
          data.map((pack,index)=>{
            return(
              <TouchableOpacity onPressOut={()=>{navigation.navigate('DetailScreen',{emojipackId:pack._id})}}>
                <Section data={pack}/>
              </TouchableOpacity>
            )
          })
        }
      </Swiper>
    </View>
    );
  }
}
const Section=(props)=>(
  <View style={{width:width, alignItems:'center'}}>
        <View style={{marginTop:20, width:width-20, alignItems:'center',backgroundColor:'#FFF3DB',borderRadius:20,}}>
          <Image source={{uri:`${API_URL}/load?emojiId=${props.data.emojis[0]._id}`}}
          style={{width:width/375*100,height:width/375*100,marginTop:10}}/>
          <View style={{marginTop:5,width:width/3*2,alignItems:'center'}}>
            <Text style={{fontSize:20,letterSpacing: 1}} numberOfLines={2}>{props.data.name}</Text>
          </View>
          <View style={{marginTop:5,width:width-40,backgroundColor:'#ffffff',flexDirection:'row',justifyContent:'space-between',padding:10,marginBottom:20,borderRadius:20}}>
          <Image source={{uri:`${API_URL}/load?emojiId=${props.data.emojis[1]._id}`}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri:`${API_URL}/load?emojiId=${props.data.emojis[2]._id}`}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri:`${API_URL}/load?emojiId=${props.data.emojis[3]._id}`}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri:`${API_URL}/load?emojiId=${props.data.emojis[4]._id}`}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
            <Image source={{uri:`${API_URL}/load?emojiId=${props.data.emojis[5]._id}`}}
            style={{width:(width-40)/7,height:(width-40)/7}}/>
          </View>
        </View>
      </View>
)
const styles = StyleSheet.create({
  
});

export default HomeCreator;