import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Signup from "./presenter";
import { API_URL } from '../../constants';
class Container extends Component {
  state={
    email: "",
    password: "",
    confirmPassword: "",
    nick: "",
    birth: "",
    isSubmitting: false,
    isSignup:false,
  }
  componentWillMount(){
    
  }
  render() {
    
    return (
      <Signup 
        {...this.state}
        {...this.props}
        changeEmail={this._changeEmail}
        changePassword={this._changePassword}
        changeConfirmPassword={this._changeConfirmPassword}
        changeNick={this._changeNick}
        changeBirth={this._changeBirth}
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
  _changeConfirmPassword = text => {
    this.setState({ confirmPassword: text });
  };
  _changeNick = text => {
    this.setState({ nick: text });
  };
  _changeBirth = text => {
    this.setState({ birth: text });
  };
  _submit = async () => {
    const { email, password,confirmPassword,nick,birth, isSubmitting } = this.state;
    if (!isSubmitting) {
      if (email && (password==confirmPassword) && nick && birth ) {
        this.setState({
          isSubmitting: true
        });
        fetch(`${API_URL}/signup/user`,{
          method:"POST",
          headers:{  
            "Content-Type" : "application/json",
          }, 
          body: JSON.stringify({
            email,
            password, 
            nick, 
            birth
          })
        })
        .then(response=>{
          console.log(response.status);
          if(response.status == 201 ){
            this.setState({
              isSignup:true
            })
          }
          else{
            console.log("check loginResult");
            Alert.alert("Something went wrong, try again");
            this.setState({ isSubmitting: false });
          }
        })
      }else {
        Alert.alert("All fields are required");
      }
    }
  };
  _CreateNew = () =>{
    const { email, password,nick,birth,isSignup,isSubmitting } = this.state;
    if(isSignup || isSubmitting){
      return false;
    }      
    
  }  
}

export default Container;