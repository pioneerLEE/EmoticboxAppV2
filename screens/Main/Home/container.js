import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Home from "./presenter";
import { API_URL } from '../../../constants';
import Loading from "../../Loading";
class Container extends Component {
  state = {
    freeEmojiTop9:null,
    payEmojiTop9:null,
    creatorData:null
  };
  componentWillMount(){
    this._getFreeEmojiTop9();
    this._getPayEmojiTop9();
    this._getCreatorData();
  }
  render() {
    const { freeEmojiTop9, payEmojiTop9,creatorData } = this.state; 
    if(!(freeEmojiTop9 && payEmojiTop9 && creatorData)){
      return(
        <Loading/>
      );
    }else{
      return (
        <Home 
          {...this.state}
          {...this.props}
        />
      );
    }
  }
  _getCreatorData = () =>{
    let url=``;
    //this.props.isLoggedIn ? (url=`${API_URL}/recommendedCreator`) : (url=`${API_URL}/bestCreator?number=10`);
    url=`${API_URL}/bestCreator?number=10`;
    fetch(url,{
      method:'GET',
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response => {
      if(response.status == 201){
        return response.json();
      }
    })
    .then(json => {
      this.setState({
        creatorData:json
      })
    })

  }
  _getFreeEmojiTop9 = () =>{
    fetch(`${API_URL}/popularlist?isFree=1&number=9`,{
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response =>{
      if(response.status == 201){
        return response.json();
      }
    })
    .then(json =>{
      this.setState({
        freeEmojiTop9:json
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  //무료 이모티콘 Top 9 불러오기
  _getPayEmojiTop9 = () =>{
    fetch(`${API_URL}/popularlist?isFree=0&number=9`,{
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response =>{
      if(response.status == 201){
        return response.json();
      }
    })
    .then(json =>{
      
      this.setState({
        payEmojiTop9:json
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  //특정 작가 이모티콘 
  
  
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