import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import Hot from "./presenter";
import { API_URL } from '../../../constants';
import Loading from "../../Loading";

class Container extends Component {
  state = {
    data:null
  };
  componentWillMount(){
    this._getHotList();
 
  }
  render() {
    const { data } = this.state; 
    if(!(data)){
      return(
        <Loading/>
      );
    }else{
      return (
        <Hot 
          {...this.state}
          {...this.props}
        />
      );
    }
  }
  _getHotList = () =>{
    fetch(`${API_URL}/popularlist?isFree=-1&number=50`,{
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
        data:json
      })
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  
  
}

export default Container;