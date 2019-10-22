import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

class HomeBigSection extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.tagText}>{"#귀여운"}</Text>
                <Text style={styles.emojipackNameText}>{"옴팡지게 따스해 옴팡이"}</Text>
                <Text style={styles.creatorText}>{"정다슬"}</Text>
                <View style={styles.emojipackSection}>
                    <View style={styles.emojipackBox}>
                        <Image style={styles.emojiImage} source={{uri: 'http://file3.instiz.net/data/file3/2018/03/16/5/b/8/5b8141787893806877611f1033bbdd29.gif'}}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  tagText:{
    marginTop:20,
    marginLeft:20, 
    color:'#0093FF',
    fontWeight:'100'
  },
  emojipackNameText:{
    marginTop:10,
    marginLeft:20,
    fontWeight:'bold',
    fontSize:25
  },
  creatorText:{
    marginTop:10,
    marginLeft:20,
    fontWeight:'100',
    fontSize:18
  },
  emojipackSection:{
    marginTop:10,
    width:width,
    alignItems:'center'
  },
  emojipackBox:{
    width:width-20, 
    height:(width-20)/359*258,
    backgroundColor:'#F6F6F4',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  emojiImage:{
    width:(width-20)/359*258, 
    height:(width-20)/359*258
  }
});

export default HomeBigSection;