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
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  render() {
    const { navigation }= this.props;
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.subtitle}>More fun in your chat</Text>
            <View style={styles.titleSection}>
              <Text style={styles.titleText}>EmoticBox</Text>
              <View style={styles.mark}/>
            </View>
          </View>
          <View style={styles.socialLoginSection}>
            <TouchableOpacity style={[styles.loginBox,{backgroundColor:'#000'}]}>
              <AntDesign name="apple1" size={30} color="#fff" style={styles.loginLogo}/>
              <Text style={styles.loginText}>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBox,{backgroundColor:'rgb(66,103,178)',marginTop:20}]}>
              <Entypo name="facebook" size={30} color="#fff" style={styles.loginLogo}/>
              <Text style={styles.loginText}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBox,{backgroundColor:'#dd4b39',marginTop:20}]}>
              <AntDesign name="google" size={30} color="#fff" style={styles.loginLogo}/>
              <Text style={styles.loginText}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBox,{backgroundColor:'orange',marginTop:20}]} onPressOut={()=>navigation.navigate('LoginScreen')}>
              <AntDesign name="mail" size={30} color="#fff" style={styles.loginLogo}/>
              <Text style={styles.loginText}>Login with Email</Text>
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
  },
  subtitle:{
    marginLeft:20, 
    color:'rgb(142,142,142)',
    fontSize:16
  },
  titleSection:{
    marginLeft:20,
    marginTop:5
  },
  titleText:{
    fontSize:32,
    fontWeight:'600',
    letterSpacing:3,
    zIndex: 999,
  },
  mark:{
    position: 'absolute',
    top: 25,
    backgroundColor: '#ffc100',
    width: 180,
    height: 10,
    zIndex: 0
  },
  socialLoginSection:{
    flex:3.5,
    alignItems:'center'
  },
  loginBox:{
    width:width-40,
    height:55,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center'
  },
  loginLogo:{
    marginLeft:width/6,
    marginRight:10
  },
  loginText:{
    color:'#fff',
    fontSize:15,
    fontWeight:'500'
  }
});

export default Landing;