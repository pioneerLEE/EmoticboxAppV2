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


class Mypage extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>hello</Text>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'red',
  },
});

export default Mypage;