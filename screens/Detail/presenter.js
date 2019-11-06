import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Collapsible from 'react-native-collapsible';
import { API_URL } from '../../constants';

const {width,height}=Dimensions.get('window');

class Detail extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    emojipack:PropTypes.object.isRequired,
    emojis:PropTypes.array.isRequired,
    author:PropTypes.object.isRequired,
    isPurchsed:PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
        isCollapsed:true
    };
  }
  collapsedfunc = () =>{
    this.setState({
      isCollapsed:!this.state.isCollapsed
    })
  }
  render() {
    const {navigation,emojipack,isPurchsed,author,emojis} = this.props;
    console.log("detail",author.nick)
    return (
        <View style={styles.container}>
          <View>
            <View style={{width:width,flexDirection:'row', marginBottom:10}}>
              <Image source={{uri: `${API_URL}/load?emojiId=${emojipack.typicalEmoji}`}}
              style={{width:120,height:120,marginLeft:20}}/>
              <View>
                <View style={{width:width-150}}>
                  <Text style={{marginTop:15,marginLeft:10,marginRight:10,fontWeight:'bold',fontSize:18,}}numberOfLines={2}>{emojipack.name}</Text>
                </View>
                <View>
                  <Text style={{marginLeft:10,marginTop:15,fontSize:15,color:'gray',letterSpacing: 1,width:width-170}}numberOfLines={1}>{author.nick}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <View style={{flex:1}}>
                    <Text style={{marginLeft:10,fontSize:15,color:'#FF3F00',letterSpacing: 1}}>$ 1.99</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',paddingRight:10}}>
                    <TouchableOpacity onPressOut={()=>this.collapsedfunc()} style={{width:65, height:35, borderRadius:40/2,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#a1a1a1'}}>
                      <Text style={{fontSize:11,color:'gray',fontWeight:'bold'}}>지원 서비스</Text>
                    </TouchableOpacity>
                    
                    <View style={{marginLeft:10,width:35, height:35, borderRadius:40/2,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#a1a1a1'}}>
                      <AntDesign name="staro" size={25} style={{marginTop:1,}} color="#A5A5A5"/>
                    </View>
                  </View>
                </View>
              </View>  
            </View>
            <Collapsible collapsed={this.state.isCollapsed}>
                      <View style={{width:width,height:60,paddingLeft:20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                          <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1024px-IMessage_logo.svg.png'}}
                            style={{width:60,height:60}}/>
                        </ScrollView>
                      </View>
            </Collapsible>
            {isPurchsed?(
              null
            ):(
              <View style={{width:width, flexDirection:'row',marginTop:10,justifyContent:'center'}}>
                <TouchableOpacity style={{width:(width-40)/3*2,height:40,backgroundColor:'orange',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>GET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10,width:(width-40)/3,height:40,backgroundColor:'#c8c8c8',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Sample</Text>
                </TouchableOpacity>
              </View>
            )}
            
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20,backgroundColor:'#F6F6F4'}}>
            <EmojiList emojis={emojis}/>
          </ScrollView>
        </View>
        );
    }
}

//`${API_URL}/load?path=${data.typicalEmoji}`
const Emoji = (props) =>{
  const {imgUrl} = props;
  console.log("imgUrl:",imgUrl);
  return(
  <Image source={{uri: `${API_URL}/load?emojiId=${imgUrl}`}}
  style={{width:(width-40)/4,height:(width-40)/4}}/>
  )
}
const EmojiList = (props) =>{
  
  return(  
  <View>
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Emoji imgUrl={props.emojis[0]}/>
      <Emoji/>
      <Emoji/>
      <Emoji/>
    </View>
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Emoji/>
      <Emoji/>
      <Emoji/>
      <Emoji/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Emoji/>
      <Emoji/>
      <Emoji/>
      <Emoji/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Emoji/>
      <Emoji/>
      <Emoji/>
      <Emoji/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Emoji/>
      <Emoji/>
      <Emoji/>
      <Emoji/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Emoji/>
      <Emoji/>
      <Emoji/>
      <Emoji/>
    </View>                
  </View>
)}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#ffffff',
  },
});

export default Detail;