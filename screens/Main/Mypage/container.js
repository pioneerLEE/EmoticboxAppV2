import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Mypage from "./presenter";

class Container extends Component {
  state = {
    
  };
  render() {
    return (
      <Mypage 
        {...this.state}
        {...this.props}
        resetSome={this._resetSome}
        choiceSome={this._choiceSome}
      />
    );
  }
  
  
}

export default Container;