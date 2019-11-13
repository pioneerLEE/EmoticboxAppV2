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
    isDibs:PropTypes.bool.isRequired,
    changeDibs:PropTypes.func.isRequired,
    getPress:PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
        isCollapsed:true,
    };
  }
  collapsedfunc = () =>{
    this.setState({
      isCollapsed:!this.state.isCollapsed,
    })
  }
  render() {
    const {navigation,emojipack,isPurchsed,author,emojis,isDibs,changeDibs,getPress} = this.props;
    console.log("detail",emojis)
    return (
        <View style={styles.container}>
          <View>
            <View style={styles.headerSection}>
              <Image source={{uri: `${API_URL}/load?emojiId=${emojipack.typicalEmoji}`}}
              style={styles.typical}/>
              <View>
                <View style={{width:width-150}}>
                  <Text style={styles.packNameText}numberOfLines={2}>{emojipack.name}</Text>
                </View>
                <View>
                  <Text style={styles.authorNickText}numberOfLines={1}>{author.nick}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <View style={{flex:1}}>
                    {
                      emojipack.isFree?<Text style={styles.packPriceText}>free</Text>:<Text style={styles.packPriceText}>{"$ "+emojipack.price}</Text>

                    }
                  </View>
                  <View style={styles.functionbuttonSection}>
                    <TouchableOpacity onPressOut={()=>this.collapsedfunc()} style={styles.supplyServiceButton}>
                      <Text style={styles.supplyServiceText}>지원 서비스</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPressOut={()=>{changeDibs()}} style={styles.DibsButton}>
                      {isDibs?<AntDesign name="star" size={25} style={{marginTop:1,}} color="#ffa500"/>:<AntDesign name="staro" size={25} style={{marginTop:1,}} color="#A5A5A5"/>}
                    </TouchableOpacity> 
                  </View>
                </View>
              </View>  
            </View>
            <Collapsible collapsed={this.state.isCollapsed}>
              <View style={styles.supplyServiceSection}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1024px-IMessage_logo.svg.png'}}
                    style={{width:60,height:60}}/>
                </ScrollView>
              </View>
            </Collapsible>
            {isPurchsed?(
              null
            ):(
              <View style={styles.getSection}>
                <TouchableOpacity onPressOut={()=>getPress()} style={styles.getButton}>
                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>GET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sampleButton}>
                  <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Sample</Text>
                </TouchableOpacity>
              </View>
            )}
            
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20,backgroundColor:'#F6F6F4'}}>
          <View>
            <EmojiSection number={0} emojis={emojis}/>
            <EmojiSection number={4} emojis={emojis}/>
            <EmojiSection number={8} emojis={emojis}/>
            <EmojiSection number={12} emojis={emojis}/>
            <EmojiSection number={16} emojis={emojis}/>
            <EmojiSection number={20} emojis={emojis}/>
            <View style={{margin:10}}/>
          </View>
          </ScrollView>
        </View>
        );
    }
}
const EmojiSection =(props)=>(
  <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
    <Emoji path={props.emojis[props.number].png512}/>
    <Emoji path={props.emojis[props.number+1].png512}/>
    <Emoji path={props.emojis[props.number+2].png512}/>
    <Emoji path={props.emojis[props.number+3].png512}/>
  </View>
)
const Emoji = (props) =>(
  <Image source={{uri: `${API_URL}/load?path=${props.path}`}} style={styles.emojiImage}/>
)

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#ffffff',
  },
  headerSection:{
    width:width,
    flexDirection:'row', 
    marginBottom:10
  },
  typical:{
    width:120,height:120,marginLeft:20
  },
  packNameText:{
    marginTop:15,marginLeft:10,marginRight:10,fontWeight:'bold',fontSize:18,
  },
  authorNickText:{
    marginLeft:10,marginTop:15,fontSize:15,color:'gray',letterSpacing: 1,width:width-170
  },
  packPriceText:{
    marginLeft:10,fontSize:15,color:'#FF3F00',letterSpacing: 1
  },
  functionbuttonSection:{
    flex:1, flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',paddingRight:10
  },
  supplyServiceButton:{
    width:65, height:35, borderRadius:40/2,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#a1a1a1'
  },
  supplyServiceText:{
    fontSize:11,color:'gray',fontWeight:'bold'
  },
  DibsButton:{
    marginLeft:10,width:35, height:35, borderRadius:40/2,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#a1a1a1'
  },
  supplyServiceSection:{
    width:width,height:60,paddingLeft:20
  },
  getSection:{
    width:width, flexDirection:'row',marginTop:10,justifyContent:'center'
  },
  getButton:{
    width:(width-40)/3*2,height:40,backgroundColor:'orange',borderRadius:10,justifyContent:'center',alignItems:'center'
  },
  sampleButton:{
    marginLeft:10,width:(width-40)/3,height:40,backgroundColor:'#c8c8c8',borderRadius:10,justifyContent:'center',alignItems:'center'
  },
  emojiImage:{
    width:(width-40)/4,height:(width-40)/4
  }
});

export default Detail;