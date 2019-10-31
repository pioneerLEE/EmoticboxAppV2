import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Hot from '../screens/Hot';
import New from '../screens/New';
import Mypage from '../screens/Mypage';
import Detail from '../screens/Detail'

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
  DefailScreen: {
    screen:Detail,
    navigationOptions: {
      headerBackTitle:null,
      title: null,
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

