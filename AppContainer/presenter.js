import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Maintab from '../navigation/MainTab'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };
  render() {
    const { isLoggedIn } = this.props;
    console.log(isLoggedIn);
    return(
      <Maintab/>
    )
    
  }
}

export default AppContainer;