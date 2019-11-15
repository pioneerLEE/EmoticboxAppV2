import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width,height}=Dimensions.get('window');
//x/2-20 

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    Userinfo: PropTypes.object.isRequired,
  };
  render() {
    
    const { navigation,isLoggedIn,Userinfo }= this.props;

    console.log('Userinfo',Userinfo);
    return (
        <View style={styles.container}>
          <ScrollView>
            {
            isLoggedIn?(
              <View>
                <View style={{width:width,height:150,backgroundColor:'#fff',justifyContent:'center',marginBottom:20}}>
                  <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                    <Text style={{marginBottom:15,fontSize:18}}>{Userinfo.email+"님 안녕하세요!"}</Text>
                  </View>
                  
                  <View style={{flexDirection:'row',marginTop:10,marginLeft:15}}>
                    <TouchableOpacity style={{width:(width-40)/2,height:40, justifyContent:'center',alignItems:'center',borderColor:'#D8D8D8',borderRadius:30,borderWidth:1,marginRight:10}}>
                      <Text style={{fontSize:13,fontWeight:'100'}}>구독 관리</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:(width-40)/2,height:40, justifyContent:'center',alignItems:'center',borderColor:'#D8D8D8',borderRadius:30,borderWidth:1}}>
                      <Text style={{fontSize:13,fontWeight:'100'}}>개인 정보 관리</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                <Touchbar navigation={navigation} next={'NoticeScreen'}text={"공지사항"} right={true}/>
                <Touchbar navigation={navigation} next={'DetailScreen'}text={"이용안내"} right={true}/>
                <Touchbar navigation={navigation} next={'DetailScreen'}text={"연결된 서비스들"} right={true}/>
                <Touchbar navigation={navigation} next={'DetailScreen'}text={"내 이모티콘들"} right={true}/>
                <Touchbar navigation={navigation} next={'DetailScreen'}text={"찜한 이모티콘들"} right={true}/>
                <View style={{height:20}}/>
                <Touchbar navigation={navigation} next={'DetailScreen'}text={"로그아웃"} right={false}/>
                
              </View>
              ):(
              <View>
                <View style={{width:width,height:180,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                  <Text style={{marginBottom:15,fontSize:18}}>More fun in your chat</Text>
                  <TouchableOpacity onPressOut={()=>{navigation.navigate("LadingScreen")}} style={{width:width-40,height:50, justifyContent:'center',alignItems:'center',backgroundColor:'orange',borderRadius:10,}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Create or Login</Text>
                  </TouchableOpacity>
                </View>
                <Touchbar navigation={navigation} next={'NoticeScreen'}text={"공지사항"} right={true}/>
                <Touchbar navigation={navigation} next={'DetailScreen'}text={"이용안내"} right={true}/>
              </View>
              )
            }
          </ScrollView>
        </View>
        );
    }
}
const Touchbar=(props)=>(
  <TouchableOpacity style={{width:width,height:50,backgroundColor:'#fff',marginTop:2,flexDirection:'row'}} onPressOut={()=>{props.navigation.navigate(props.next)}}>
    <View style={{flex:10,justifyContent:'center'}}>
      <Text style={{marginLeft:20,fontSize:18}}>{props.text}</Text>
    </View>
    <View style={{flex:1,justifyContent:'center'}}>
      {
        props.right ? (<AntDesign name="right" size={25} style={{marginTop:1}}/>) : (<View/>)
      }
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#F6F6F4',
  },
});

export default Mypage;