import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Mypacklist from "./presenter";
import Loading from "../Loading";
import { API_URL } from '../../constants';
class Container extends Component {
  state = {
    data : null,
    isDataNull: false
  };
  componentWillMount(){
    this._getMypack();
  }
  render() {
    const { data,isDataNull } = this.state; 
    console.log("my data:",data);
    //데이타가
    if(!(data)){
      console.log("헬로우")
      return(
        <Loading/>
      );
    }else{
      return (
        <Mypacklist 
          {...this.state}
          {...this.props}
        />
      );
    }
  }
  _getMypack = () => {
    const { token,isLoggedIn } = this.props;
    fetch(`${API_URL}/mypage/myemoji`,{
      method:"GET",
      headers:{
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })
    .then(response =>{
      if(response.status == 201){
        return response.json();
      }
    })
    .then(json =>{
      this.setState({
        data:json
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }  
}

export default Container;