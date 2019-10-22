import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
const {width,height}=Dimensions.get('window');


class Home extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>EmoticBox</Text>
            </View>
        </SafeAreaView>
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