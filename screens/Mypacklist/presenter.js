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
import ListSection from '../Components/ListSection'

const {width,height}=Dimensions.get('window');

class Mypacklist extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    data:PropTypes.array.isRequired,
  };
  render() {
    const { navigation,data }= this.props;
    return (
        <View style={styles.container}>
          <ScrollView>
          {
            data.map((pack,index)=>{
              return(
                <TouchableOpacity>
                  <ListSection data={pack}/>
                </TouchableOpacity>                
              )
            })
          }
          </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  
});

export default Mypacklist;