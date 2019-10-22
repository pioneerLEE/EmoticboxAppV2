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


class Hot extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <View style={{height:120,flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri: 'https://i.pinimg.com/originals/ac/95/2e/ac952e8833ff7210249b675456e58f37.gif'}}
               style={{width:90,height:90,backgroundColor:'gray',marginLeft:20}}/>
              <View style={{height:90}}>
                <Text style={{marginLeft:20,marginTop:10,fontSize:20}}>오버액션토끼</Text>
                <Text style={{marginLeft:20,marginTop:5,fontSize:15,color:'gray'}}>애소</Text>
                <View style={{marginLeft:20,marginTop:15,height:25,width:50,borderColor:'orange',borderRadius:20,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:12, color:'#FF3F00'}}>$0.9</Text>
                </View>
                <View style={{marginLeft:10,marginTop:15,width:width-130,height:1,backgroundColor:'#f1f3f5'}}/>
              </View>
            </View>
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