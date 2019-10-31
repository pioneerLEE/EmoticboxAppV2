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
import HomeBigSection from './Components/HomeBigSection'
import HomeHotPaySection from './Components/HomeHotPaySection';
import HomeHotFreeSection from './Components/HomeHotFreeSection';
import HomeCreator from './Components/HomeCreatorSection'
import HomeEndSection from './Components/HomeEndSection'

const {width,height}=Dimensions.get('window');

class Home extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  render() {
    const { navigation }= this.props;
    return (
        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPressOut={()=>navigation.navigate('DefailScreen')}>
              <HomeBigSection/>
            </TouchableOpacity>
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