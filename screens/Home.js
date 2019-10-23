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
import HomeBigSection from './Components/HomeBigSection'
import HomeHotPaySection from './Components/HomeHotPaySection';
import HomeHotFreeSection from './Components/HomeHotFreeSection';
import HomeCreator from './Components/HomeCreatorSection'
import HomeEndSection from './Components/HomeEndSection'


class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <HomeBigSection/>
            <LineComponent/>
            <HomeHotPaySection/>
            <LineComponent/>
            <HomeHotFreeSection/>
            <LineComponent/>
            <HomeCreator/>
            <HomeEndSection/>
          </ScrollView>
        </View>
        );
    }
}

const LineComponent = ()=>(
  <View style={{alignItems:'center'}}>
    <View style={styles.LineComponent}/>
  </View>
);


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
  },
  LineComponent:{
    width:width-40,
    marginTop:15,
    marginBottom:10,
    height:0.5,
    backgroundColor:'#f1f3f5'
  }
});

export default Home;