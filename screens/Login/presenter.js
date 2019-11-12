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
    isLogin:PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  };
  render() {
    const { navigation,email,password,changeEmail,changePassword,submit,isLogin }= this.props;
    if(isLogin){
      navigation.navigate('Home');
    }
    return (
      <View style={styles.container}>
        <View style={{flex:6}}>
          <View style={{marginTop:height/5,marginLeft:30}}>
            <View>
              <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Email</Text>
              <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:70,height:8,zIndex: 0}}/>
            </View>
            <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
              <TextInput style={{fontSize:21,margin:5,color:'rgb(61,61,61)'}} autoCapitalize='none' autoCorrect="false" value={email} onChangeText={text => changeEmail(text)}/>
            </View>
          </View>
          <View style={{marginTop:height/10,marginLeft:30}}>
            <View>
              <Text style={{fontSize:25,fontWeight:'600',marginBottom:10,letterSpacing:1,zIndex: 999,}}>Password</Text>
              <View style={{ position: 'absolute',top:18,backgroundColor: '#ffc100',width:120,height:8,zIndex: 0}}/>
            </View>
            <View style={{borderBottomColor:'black',borderBottomWidth:1,width:width-60}}>
              <TextInput style={{fontSize:21,margin:5}} secureTextEntry={true} value={password} onChangeText={text => changePassword(text)}/>
            </View>
          </View>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <TouchableOpacity onPressOut={()=>{submit()}}  style={{backgroundColor:'orange',justifyContent:'center',alignItems:'center',height:50,width:width-40,borderRadius:10}}>
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
});

export default Login;