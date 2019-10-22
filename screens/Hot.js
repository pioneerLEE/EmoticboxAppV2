import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
const {width,height}=Dimensions.get('window');
import NewSection from './components/NewSection'


class Hot extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <NewSection/>
            

          </ScrollView>
            
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

export default Hot;