import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Detail from "./presenter";
import Loading from "../Loading";
import { API_URL } from '../../constants';
class Container extends Component {
  state={
    emojipackId:this.props.navigation.getParam('emojipackId',''),
    emojipack:{},
    author:{},
    emojis:[],
    isPurchsed:false,
    isDibs:false
  }
  componentWillMount(){
    this._getemojipackDetail()
  }
  render() {  
    if(!this.state.emojis[0]){
      return(
        <Loading/>
      )
    }
    else{
      return (
        <Detail 
          {...this.state}
          {...this.props}
          changeDibs = {this._changeDibs}
          getPress = {this._getPress}
        />
      );
    }
  }
  _getPress=async()=>{

    result = await this._getpack();
    console.log(result)
  }
  _changeDibs=()=>{
    const {isDibs} = this.state;
    if(!isDibs){
      //_checkDibs();
    }else{
      //_checkunDibs();
    }
    this.setState({
      isDibs:!isDibs
    })
  }
  _getpack = () =>{
    const { emojipackId} = this.state;
    const { token,isLoggedIn } = this.props;
    console.log(isLoggedIn)
    if(!isLoggedIn){
      return false;
    }      
    fetch(`$   {API_URL}/getpack`,{
      method:"POST",
      headers:{  
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`,
      }, 
      body: JSON.stringify({
        emojipackid: emojipackId
      })
    })
    .then(response=>{
      console.log(response.status);
      if(response.status == 200 ){
        return true;
      }
      else{
        return false;
      }
    })
  }
  _getemojipackDetail = () =>{
    fetch(`${API_URL}/detail/${this.state.emojipackId}`,{
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
      console.log("working??????????")
      this.setState({
        emojipack:json.exEmojipack,
        isPurchsed:json.isPurchsed,
        author:json.exEmojipack.author,
        emojis:json.exEmojipack.emojis
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }
}

export default Container;