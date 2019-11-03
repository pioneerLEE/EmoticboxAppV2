import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo'; //facebook 
import AntDesign from 'react-native-vector-icons/AntDesign'; //apple1 google

const {width,height}=Dimensions.get('window');

class Landing extends React.Component {
  render() {
    const { navigation }= this.props;
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{marginLeft:20, color:'rgb(142,142,142)',fontSize:16}}>More fun in your chat</Text>
            <View style={{marginLeft:20,marginTop:5}}>
              <Text style={{fontSize:32,fontWeight:'600',letterSpacing:3,zIndex: 999,}}>EmoticBox</Text>
              <View style={{position: 'absolute',top: 25,backgroundColor: '#ffc100',width: 180,height: 10,zIndex: 0}}/>
            </View>
          </View>
          <View style={{flex:3.5,alignItems:'center'}}>
            <TouchableOpacity style={{width:width-40,height:55,backgroundColor:'#000',borderRadius:10,flexDirection:'row',alignItems:'center'}}>
              <AntDesign name="apple1" size={30} color="#fff" style={{marginLeft:width/6,marginRight:10}}/>
              <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}}>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:width-40,height:55,backgroundColor:'rgb(66,103,178)',borderRadius:10,flexDirection:'row',alignItems:'center',marginTop:20}}>
              <Entypo name="facebook" size={30} color="#fff" style={{marginLeft:width/6,marginRight:10}}/>
              <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:width-40,height:55,backgroundColor:'#dd4b39',borderRadius:10,flexDirection:'row',alignItems:'center',marginTop:20}}>
              <AntDesign name="google" size={30} color="#fff" style={{marginLeft:width/6,marginRight:10}}/>
              <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:width-40,height:55,backgroundColor:'orange',borderRadius:10,flexDirection:'row',alignItems:'center',marginTop:20}}>
              <AntDesign name="mail" size={30} color="#fff" style={{marginLeft:width/6,marginRight:10}}/>
              <Text style={{color:'#fff',fontSize:15,fontWeight:'500'}}>Login with Email</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1.5,justifyContent:'center',flexDirection:'row'}}> 
            <Text style={{color:'rgb(142,142,142)',fontSize:15}}>No account? </Text>
            <TouchableOpacity>
              <Text style={{fontSize:15,color:'orange'}}>Create one!</Text>
            </TouchableOpacity>
          </View >
        </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fafafa',
  },
  header:{
    flex:3,
    justifyContent:'center'
  }
});

export default Landing;