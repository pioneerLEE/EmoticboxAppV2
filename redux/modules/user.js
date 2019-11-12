// 유저의 프로필을 저장한다.

// Imports

import { API_URL } from '../../constants';
import { AsyncStorage } from 'react-native';



// Actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// Action Creators

function setLogIn(token){
  return{
    type : LOG_IN,
    token : token
  }
}

function setUser(User){
  return{
    type : SET_USER,
    User: User,
  }
}

function logOut(){
  return {
    type: LOG_OUT
  }
}

// API Actions
function login(email,password){
  console.log("redux email:",email," passward:",password);
  return dispatch => {
    return fetch(`${API_URL}/signin`,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    })
    .then(response => response.json())
    .then(json =>{
      console.log("로그인 정보 확인 토큰:"+json.token);
      if(json.token && json.User){
        dispatch(setLogIn(json.token));
        dispatch(setUser(json.User));
        return true;
      }else{
        return false;
      }
    })
  }
}
// Initial State
const initialState = {
    isLoggedIn: false,
  };
  // Reducer
  function reducer(state = initialState, action) {
    switch (action.type) {
      case LOG_IN:
        return applyLogIn(state,action);
      case LOG_OUT:
        return applyLogOut(state,action);
      case SET_USER:
        return applySetUser(state,action);
      default:
        return state;
    }
  }
  
  // Reducer Functions
  function applyLogIn(state,action){
    const { token } = action;
    return {
      ...state,
      isLoggedIn: true,
      token: token,
    }
  }
  async function applyLogOut(state,action){
    console.log('로그아웃')
    await AsyncStorage.clear();
    return {
      isLoggedIn:false,
      token:""
    }
  }
  function applySetUser(state,action){
    const { User } = action;
    return {
      ...state,
      Userinfo: User,
    }
  }

  // Exports

  const actionCreators ={
    login,
  };
  export { actionCreators };
  
  // Default Reducer Export
  
  export default reducer;