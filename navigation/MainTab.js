import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Hot from '../screens/Hot';
import New from '../screens/New';
import Mypage from '../screens/Mypage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default MainTab = createAppContainer(createBottomTabNavigator({
  HomeScreen: {
     screen: Home,
     navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name={focused ? "home" : "home-outline"}
          size={28}
          color={focused ? '#36b1bf':'#bcbcbc'}
        />
      )
    }
  },
  HotScreen: { 
    //screen: ChatTab,
    screen: Hot,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialIcons
          name={focused ? "whatshot" : "whatshot"}
          size={27}
          color={focused ? '#36b1bf':'#bcbcbc'}
        />
      )
    }
   },
   NewScreen: { 
    screen: New,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <MaterialIcons
          name={focused ? "fiber-new" : "fiber-new"}//109
          size={27}
          color={focused ? '#36b1bf':'#bcbcbc'}
        />
      )
    }
   },
   Mypage: { 
    screen: Mypage,
    navigationOptions:{
      tabBarIcon: ({ focused }) => (
        <FontAwesome
          name={focused ? "user-circle-o" : "user-circle"}//109
          size={24}
          color={focused ? '#36b1bf':'#bcbcbc'}
        />
      )
    }
   },
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions:{
    
  },
  tabBarOptions:{
    showLabel: false,
  }
}));

