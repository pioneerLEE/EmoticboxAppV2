import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
const {width,height}=Dimensions.get('window');
import NewSection from './Components/NewSection'


class Loading extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ActivityIndicator size="small" color="#00ff00" />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#ffffff',
      justifyContent:'center',
      alignItems:"center"
      
  },
});

export default Loading;