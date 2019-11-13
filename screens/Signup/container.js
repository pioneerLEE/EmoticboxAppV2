import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Landing from "./presenter";
import Loading from "../Loading";
import { API_URL } from '../../constants';
class Container extends Component {
  state={
  
  }
  componentWillMount(){
    
  }
  render() {  
    return (
      <Landing 
        {...this.state}
        {...this.props}
        changeDibs = {this._changeDibs}
      />
    );
  }  
}

export default Container;