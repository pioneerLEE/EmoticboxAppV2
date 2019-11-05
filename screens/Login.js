import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
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

class Login extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  render() {
    const { navigation }= this.props;
    return (
      <View style={styles.container}>
        <View style={{flex:6}}>
          <View style={{marginTop:height/5,marginLeft:30}}>
            <View>
              <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Email</Text>
              <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:70,height:8,zIndex: 0}}/>
            </View>
            <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
              <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} autoCapitalize='none' autoCorrect="false"/>
            </View>
          </View>
          <View style={{marginTop:height/10,marginLeft:30}}>
            <View>
              <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Password</Text>
              <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:120,height:8,zIndex: 0}}/>
            </View>
            <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
              <TextInput style={{fontSize:21,margin:5}} secureTextEntry={true}/>
            </View>
          </View>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'orange',justifyContent:'center',alignItems:'center',height:50,width:width-40,borderRadius:10}}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
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

export default Login;