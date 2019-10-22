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


class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <HomeBigSection/>

            <View style={{alignItems:'center'}}>
              <View style={{width:width-20,marginTop:10,marginBottom:10,height:0.5,backgroundColor:'#dee2e6'}}/>
            </View>
            <View style={{witdh:width,height:250,backgroundColor:'red'}}>

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