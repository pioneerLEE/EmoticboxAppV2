import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from '../screens/Landing';
import Login from '../screens/Login'

export default LandingStack = createAppContainer(createStackNavigator({
    LadingScreen: {
      screen: Landing,
      navigationOptions: {
        header:null,
        title: null,
        headerBackTitle: null,
      },
    },
    LoginScreen: {
      screen:Login,
      navigationOptions: {
        headerBackTitle:null,
        title: null
      },
    }
  },{
    initialRouteName: 'LadingScreen',
    defaultNavigationOptions:{
      headerBackTitle:null,
      headerStyle:{
        backgroundColor: '#fafafa',
          shadowColor: 'transparent',
          borderBottomWidth: 0,
      },
      headerTintColor:'rgb(0,0,0)',  
    }
  }));