import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Signup from "./presenter";
import { API_URL } from '../../constants';
class Container extends Component {
  state={
  
  }
  componentWillMount(){
    
  }
  render() {  
    return (
      <Signup 
        {...this.state}
        {...this.props}
        changeDibs = {this._changeDibs}
      />
    );
  }  
}

export default Container;