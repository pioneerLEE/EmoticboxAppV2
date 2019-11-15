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
  Image,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Entypo from 'react-native-vector-icons/Entypo'; //facebook 
import AntDesign from 'react-native-vector-icons/AntDesign'; //apple1 google

const {width,height}=Dimensions.get('window');

class Signup extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    changeConfirmPassword: PropTypes.func.isRequired,
    changeNick: PropTypes.func.isRequired,
    changeBirth: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    isSignup: PropTypes.bool.isRequired
  };
  render() {
    const { navigation,email,password,confirmPassword,nick,birth,changeEmail,changePassword,changeConfirmPassword,changeNick,changeBirth,submit,isSignup }= this.props;
    if(isSignup){
      navigation.navigate('LadingScreen');
    }
    return (
        <View style={styles.container}>
          <KeyboardAwareScrollView style={{height:height/7*6, width:width}}>
            <View style={{height:height/7*6-50, width:width,justifyContent:'space-around',paddingTop:50,paddingBottom:50,paddingLeft:30}}>
              <View>
                  <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Email</Text>
                  <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:70,height:8,zIndex: 0}}/>
                </View>
                <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
                  <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} autoCapitalize='none' autoCorrect="false" value={email} onChangeText={text => changeEmail(text)}/>
              </View>
              <View>
                  <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Password</Text>
                  <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:120,height:8,zIndex: 0}}/>
                </View>
                <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
                  <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} secureTextEntry={true} value={password} onChangeText={text => changePassword(text)}/>
              </View>
              <View>
                  <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Confirm password</Text>
                  <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:230,height:8,zIndex: 0}}/>
                </View>
                <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
                  <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} secureTextEntry={true} value={confirmPassword} onChangeText={text => changeConfirmPassword(text)}/>
              </View>
              <View>
                  <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Nick</Text>
                  <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:60,height:8,zIndex: 0}}/>
                </View>
                <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
                  <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} autoCapitalize='none' autoCorrect="false" value={nick} onChangeText={text => changeNick(text)}/>
              </View>
              <View>
                  <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Birth</Text>
                  <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:60,height:8,zIndex: 0}}/>
                </View>
                <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
                  <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} autoCapitalize='none' autoCorrect="false" value={birth} onChangeText={text => changeBirth(text)}/>
              </View>
            </View>
          </KeyboardAwareScrollView>
          <View style={{height:height/7,width:width,alignItems:'center'}}>
            <TouchableOpacity onPressOut={()=>{submit()}}  style={{backgroundColor:'orange',justifyContent:'center',alignItems:'center',height:50,width:width-40,borderRadius:10}}>
              <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  
});

export default Signup;