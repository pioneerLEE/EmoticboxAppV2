import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Detail from "./presenter";
import { API_URL } from '../../constants';
class Container extends Component {
  state ={
    emojipackId:this.props.navigation.getParam('emojipackId',''),
    emojipack:{},
    author:{},
    emojis:[],
    isPurchsed:false,
  }
  componentWillMount(){
    this._getemojipackDetail()
    
  }
  render() {  
    console.log("Emojipack",this.state.emojis[0])
    return (
      <Detail 
        {...this.state}
        {...this.props}
      />
    );
  }
  componentDidUpdate(){
    
  }
  //대표 이모티콘 불러오기
  //유료 이모티콘 Top 9 불러오기
  
  _getemojipackDetail = () =>{
    fetch(`${API_URL}/detail/${this.state.emojipackId}`,{
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(response =>{
      console.log("working?")
      if(response.status == 201){
        return response.json();
      }
    })
    .then(json =>{
      console.log
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