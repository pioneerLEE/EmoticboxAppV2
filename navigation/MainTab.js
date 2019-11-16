import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Main/Home';
import Hot from '../screens/Main/Hot';
import New from '../screens/Main/New';
import Mypage from '../screens/Main/Mypage';
import Detail from '../screens/Detail';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Mypacklist from '../screens/Mypacklist';
import Notice from '../screens/Notice';
import Signup from '../screens/Signup'


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainTab = createAppContainer(createMaterialTopTabNavigator({
  Home: {
     screen: Home,
     navigationOptions: {
      title:'HOME',
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        indicatorStyle:{
          backgroundColor: 'orange'
        },
        style: {
          backgroundColor: '#ffffff',
        },
      }
    }
  },
  Hot: { 
    //screen: ChatTab,
    screen: Hot,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        indicatorStyle:{
          backgroundColor: 'orange'
        },
        style: {
          backgroundColor: '#ffffff',
        },
      }
    }
   },
   New: { 
    screen: New,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        indicatorStyle:{
          backgroundColor: 'orange'
        },
        style: {
          backgroundColor: '#ffffff',

        },
      }
    }
   },
   My: { 
    screen: Mypage,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        indicatorStyle:{
          backgroundColor: 'orange'
        },
        style: {
          backgroundColor: '#ffffff',
        },
      }
    }
   },
}, {
  initialRouteName: 'Home',
  swipeEnabled:false,
  defaultNavigationOptions:{
    
  },
  tabBarOptions:{
    showLabel: false,
  }
}));


export default Main = createAppContainer(createStackNavigator({
  MainScreen: {
    screen: MainTab,
    navigationOptions: {
      headerBackTitle:null,
      headerStyle: {
        backgroundColor: '#ffffff',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
      },
      headerTintColor: '#000000',
      headerTitleStyle:{
        fontSize:25,
        letterSpacing: 2
      },
      title: 'EmoticBox',
    },
  },
  DetailScreen: {
    screen:Detail,
    navigationOptions: {
      headerBackTitle:null,
      title: null,
    },
  },
  LadingScreen: {
    screen: Landing,
    navigationOptions: {
      headerBackTitle: null,
    },
  },
  LoginScreen: {
    screen:Login,
    navigationOptions: {
      headerBackTitle:null,
    },
  },
  MypacklistScreen:{
    screen:Mypacklist,
    navigationOptions:{
      headerBackTitle: null,
      title:"My Stickers"
    },
  },
  NoticeScreen:{
    screen:Notice,
    navigationOptions:{
      headerBackTitle: null,
    },
  },
  SignupScreen:{
    screen:Signup,
    navigationOptions:{
      headerBackTitle: null,
      title:"Signup"
    },
  }
},{
  initialRouteName: 'MainScreen',
  defaultNavigationOptions:{
    headerBackTitle:null,
    headerStyle:{
      backgroundColor: '#ffffff',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
    },
    headerTintColor:'rgb(0,0,0)',  
  }
}));

