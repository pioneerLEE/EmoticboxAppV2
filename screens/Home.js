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
const {width,height}=Dimensions.get('window');
import HomeBigSection from './components/HomeBigSection'
import HomeHot from './components/HomeHot'


class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <HomeBigSection/>
            <View style={{alignItems:'center'}}>
              <View style={{width:width-40,marginTop:15,marginBottom:10,height:0.5,backgroundColor:'#f1f3f5'}}/>
            </View>
            <View style={{witdh:width}}>
              <Text style={{marginTop:10,marginLeft:20,fontWeight:'bold',fontSize:25}}>유료 스티커 순위</Text>
              <HomeHot/>
              <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
              <HomeHot/>
              <View style={{marginLeft:100,width:width-110,height:1,backgroundColor:'#f1f3f5'}}/>
              <HomeHot/>
            </View>
          </ScrollView>
          
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
  },
  header:{
    height: '14%',
    justifyContent:'center'
  },
  headerText:{
    fontSize: 20
  }
});

export default Home;