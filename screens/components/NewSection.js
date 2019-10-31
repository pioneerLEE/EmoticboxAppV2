import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
const {width,height}=Dimensions.get('screen');

const styles = StyleSheet.create({
  
});

class NewSection extends React.Component {
  static propTypes = {
    
  };
  render() {
    const {
      
    } = this.props;
    return (
        <View style={{height:120,flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri: 'https://i.pinimg.com/originals/ac/95/2e/ac952e8833ff7210249b675456e58f37.gif'}}
            style={{width:90,height:90,backgroundColor:'gray',marginLeft:20}}/>
            <View style={{height:90}}>
            <View style={{width:width/100*70}}>
              <Text style={{marginLeft:20,marginTop:20,fontSize:15,letterSpacing: 1}} numberOfLines={1} ellipsizeMode={'tail'}>{"뚠뚠! 핑구&힝구, 우린 돼지니까~"}</Text>
            </View>
            <Text style={{marginLeft:20,marginTop:5,fontSize:10,color:'gray'}}>애소</Text>
            <View style={{marginLeft:20,marginTop:15,height:25,width:50,borderColor:'orange',borderRadius:20,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:12, color:'#FF3F00'}}>$0.9</Text>
            </View>
            <View style={{marginLeft:10,marginTop:15,width:width-130,height:1,backgroundColor:'#f1f3f5'}}/>
            </View>
        </View>
    );
  }
}

export default NewSection;