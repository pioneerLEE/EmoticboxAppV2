import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Login from "./presenter";
import Loading from "../Loading";
import { API_URL } from '../../constants';
class Container extends Component {
  state={
    email: "",
    password: "",
    isSubmitting: false,
    isLogin:false,
  }
  render() {  

    return (
      <Login 
        {...this.state}
        {...this.props}
        changeEmail = {this._changeEmail}
        changePassword = {this._changePassword}
        submit={this._submit}
      />
    );  
  }
  _changeEmail = text => {
    this.setState({ email: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = async () => {
    const { email, password, isSubmitting } = this.state;
    const { login } = this.props;
    console.log("submit email:",email," passward:",password);
    if (!isSubmitting) {
      if (email && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await login(email, password);
        if (!loginResult) {
          console.log("check loginResult");
          Alert.alert("Something went wrong, try again");
          this.setState({ isSubmitting: false });
        }else{
          this.setState({
            isLogin:true
          })
        }
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;