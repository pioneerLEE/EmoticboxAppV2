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
import PropTypes from 'prop-types';
import HotSection from '../../Components/HotSection'

const {width,height}=Dimensions.get('window');

class Hot extends React.Component {
  static propTypes={
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    data:PropTypes.array.isRequired,
  };
  render() {
    const {navigation, data} = this.props;
    return (
        <View style={styles.container}>
          <ScrollView>
            {
              data.map((pack,index)=>{
                return(
                  <TouchableOpacity>
                    <HotSection data={pack} number={index+1}/>
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
      flex: 1,
      backgroundColor:'#ffffff',
  },
});

export default Hot;