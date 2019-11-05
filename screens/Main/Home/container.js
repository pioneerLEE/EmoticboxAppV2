import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Home from "./presenter";

class Container extends Component {
  state = {
    
  };
  render() {
    return (
      <Home 
        {...this.state}
        {...this.props}
        resetSome={this._resetSome}
        choiceSome={this._choiceSome}
      />
    );
  }
  _resetSome = () =>{
    this.setState({isSome:false});
  }
  _choiceSome = () =>{
    this.setState({isSome:true});
  }
  _sendSome = () =>{
    //some api 호출
  }
  _sendLike = () =>{
    //like api 호출
  }
  _sendUnLike = () =>{
    //unlike api 호출
  }
  
  _createTemporaryPassword = email =>{
      fetch(`${API_URL}/forget/`,{
          method: "PUT",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            email:email,
          })
      })
      .then(response => {
          if(response.status === 400){
            //서버 오류
          }
          else if(response.status === 204){
            //회원가입된 메일이 아님
          }else if(response.status === 201){
            //임시 비밀번호 발급됨
            this.setState({
              isSubmittingEmail: true,
            });
          }
        })
        .catch(error =>{
          console.error(error);
          return { name: "network error", description: "" };
        })
  }
  
}

export default Container;