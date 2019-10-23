import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Hot from '../screens/Hot';
import New from '../screens/New';
import Mypage from '../screens/Mypage';

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
          backgroundColor: '#fefefe',
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
          backgroundColor: '#fefefe',
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
          backgroundColor: '#fefefe',

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
          backgroundColor: '#fefefe',
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
    headerLayoutPreset:'left',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fefefe',
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
}));

