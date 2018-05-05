import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Screens
import MainScreen from './screens/MainScreen';

const AppStackNavigator = StackNavigator({
  Main:{
    screen: MainScreen
  }
  // Home: {
  //   screen: HomeScreen
  // },
  // Search: {
  //   screen: SearchScreen
  // },
  // CreatePost: {
  //   screen: CreatePostScreen
  // },
  // Activities: {
  //   screen: ActivitiesScreen
  // },
  // UserProfile: {
  //   screen: UserProfileScreen
  // }
},
{
	initialRouteName: 'Main'
})

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

