import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Notice from "./presenter";
import Loading from "../Loading";
import { API_URL } from '../../constants';
class Container extends Component {
  state={
  
  }
  componentWillMount(){
    
  }
  render() {  
    return (
      <Notice 
        {...this.state}
        {...this.props}
      />
    );
  }  
}

export default Container;