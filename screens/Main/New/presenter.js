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
import PropTypes from 'prop-types';
import NewSection from '../../Components/NewSection'


class New extends React.Component {
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
                  <NewSection data={pack}/>
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

export default New;