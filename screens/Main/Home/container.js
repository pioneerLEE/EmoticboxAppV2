import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Home from "./presenter";
import { API_URL } from '../../../constants';
class Container extends Component {
  state = {
    freeEmojiTop9:[
      {
          "_id": "5dc15fb21e4622bfbffe5ef5",
          "packname": "테스트1",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트1/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc15fc21e4622bfbffe5efb",
          "packname": "테스트2",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트2/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc15fda1e4622bfbffe5f07",
          "packname": "테스트3",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트3/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc15fe41e4622bfbffe5f0d",
          "packname": "테스트4",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트4/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc15ff21e4622bfbffe5f13",
          "packname": "테스트5",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트5/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc1603c1e4622bfbffe5f19",
          "packname": "테스트6",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트6/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc1605f1e4622bfbffe5f2b",
          "packname": "테스트7",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트7/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc160bf1e4622bfbffe5f31",
          "packname": "테스트8",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트8/0.gif",
          "isFree": "0"
      },
      {
          "_id": "5dc160c71e4622bfbffe5f37",
          "packname": "테스트9",
          "author": {
              "nick": "이재원",
              "_id": "5dbfd4ac64db8f8649bf95a0"
          },
          "typicalEmoji": "emoji/테스트9/0.gif",
          "isFree": "0"
      }
  ]
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
  componentDidUpdate(){
    this._getFreeEmojiTop9()
  }
  //대표 이모티콘 불러오기
  //유료 이모티콘 Top 9 불러오기
  
  _getFreeEmojiTop9 = () =>{
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
        freeEmojiTop9:json
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  //무료 이모티콘 Top 9 불러오기
  //특정 작가 이모티콘 
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