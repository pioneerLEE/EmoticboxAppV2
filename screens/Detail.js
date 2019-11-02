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
const {width,height}=Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Collapsible from 'react-native-collapsible';

class Detail extends React.Component {
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
    return (
        <View style={styles.container}>
          <View>
            <View style={{width:width,flexDirection:'row', marginBottom:10}}>
              <Image source={{uri: 'https://i.pinimg.com/originals/ac/95/2e/ac952e8833ff7210249b675456e58f37.gif'}}
              style={{width:120,height:120,marginLeft:20}}/>
              <View>
                <View style={{width:width-150}}>
                  <Text style={{marginTop:10,marginLeft:10,marginRight:10,fontWeight:'bold',fontSize:18,}}numberOfLines={2}>MY LITTLE PONY 애니메이션 스티커</Text>
                </View>
                <View>
                  <Text style={{marginLeft:10,marginTop:10,fontSize:15,color:'gray',letterSpacing: 1,width:width-170}}numberOfLines={1}>하이하하하하하하fdfd하하하하라fdfdf라하</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
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
            <View style={{width:width, flexDirection:'row',marginTop:10,justifyContent:'center'}}>
              <TouchableOpacity style={{width:(width-40)/3*2,height:40,backgroundColor:'orange',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>GET</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10,width:(width-40)/3,height:40,backgroundColor:'#c8c8c8',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Sample</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20,backgroundColor:'#F6F6F4'}}>
            <EmojiList/>
          </ScrollView>
        </View>
        );
    }
}





const EmojiList = () =>(  
  <View>
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
    </View>
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
    </View>  
    <View style={{width:width,flexDirection:'row',justifyContent:'space-between',padding:5,marginTop:10}}>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
      <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
        style={{width:(width-40)/4,height:(width-40)/4}}/>
    </View>                
  </View>
)
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#ffffff',
  },
});

export default Detail;