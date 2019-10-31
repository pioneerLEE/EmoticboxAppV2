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

class Detail extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View>
            <View style={{width:width,flexDirection:'row'}}>
              <Image source={{uri: 'https://i.pinimg.com/originals/ac/95/2e/ac952e8833ff7210249b675456e58f37.gif'}}
              style={{width:120,height:120,marginLeft:20}}/>
              <View>
                <View style={{width:width-150}}>
                  <Text style={{marginTop:10,marginLeft:10,marginRight:10,fontWeight:'bold',fontSize:18,}}numberOfLines={2}>MY LITTLE PONY 애니메이션 스티커</Text>
                </View>
                <View>
                  <Text style={{marginLeft:10,marginTop:10,fontSize:15,color:'gray',letterSpacing: 1}}>이재원입니다</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                  <View style={{flex:1}}>
                    <Text style={{marginLeft:10,fontSize:15,color:'#FF3F00',letterSpacing: 1}}>$ 1.99</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',paddingRight:10}}>
                    <View style={{width:65, height:35, borderRadius:40/2,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#a1a1a1'}}>
                      <Text style={{fontSize:11,color:'gray',fontWeight:'bold'}}>지원 서비스</Text>
                    </View>
                    <View style={{marginLeft:10,width:35, height:35, borderRadius:40/2,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#a1a1a1'}}>
                      <AntDesign name="staro" size={25} style={{marginTop:1,}} color="#A5A5A5"/>
                    </View>
                  </View>
                </View>
              </View>  
            </View>
            <View style={{width:width, flexDirection:'row',marginTop:20,justifyContent:'center'}}>
              <View style={{width:(width-40)/3*2,height:40,backgroundColor:'orange',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>GET</Text>
              </View>
              <View style={{marginLeft:10,width:(width-40)/3,height:40,backgroundColor:'#c8c8c8',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Sample</Text>
              </View>
            </View>
          </View>
          <ScrollView style={{marginTop:20,backgroundColor:'#F6F6F4'}}>
            <View style={{width:width,flexDirection:'row',justifyContent:'center'}}>
              <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
              style={{width:(width-20)/4,height:(width-20)/4}}/>
              <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
              style={{width:(width-20)/4,height:(width-20)/4}}/>
              <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
              style={{width:(width-20)/4,height:(width-20)/4}}/>
              <Image source={{uri: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2166B933584C237124F003'}}
              style={{width:(width-20)/4,height:(width-20)/4}}/>
              
            </View>
            
          </ScrollView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#ffffff',
  },
});

export default Detail;