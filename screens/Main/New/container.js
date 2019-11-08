import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import New from "./presenter";
import { API_URL } from '../../../constants';
import Loading from "../../Loading";

class Container extends Component {
  state = {
    data : null
  };
  componentWillMount(){
    this._getNewList();
 
  }
  render() {
    const { data } = this.state; 
    if(!(data)){
      console.log("헬로우")
      return(
        <Loading/>
      );
    }else{
      console.log("new",data);
      return (
        <New 
          {...this.state}
          {...this.props}
        />
      );
    }
  }
  _getNewList = () => {
    fetch(`${API_URL}/newlist?number=50`,{
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
      console.log('json',json)
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