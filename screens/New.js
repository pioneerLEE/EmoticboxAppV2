import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {width,height}=Dimensions.get('window');


class New extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#ffffff',
  },
});

export default New;