/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,  View, Image} from 'react-native';
import { Content, Fab, Item, Input, Header, Footer, FooterTab, Left, Body, Right, Title, Container, Card, CardItem, Text, Button, Drawer} from 'native-base';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';



import Icon from 'react-native-vector-icons/FontAwesome';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import navigate from './src/navigator/navigate';
// import Drawers from './src/navigator/drawer';

import Notes from './src/notes/Notes';
import NotesUpdate from './src/notes/NotesUpdate';

import HeaderMain from './src/header/headersMain';
import Welcome from './src/welcome/Welcome';
import drawer from './src/navigator/drawer';



// class App extends Component {
//   // stat = { name: 'helooooo' }

 

//   render() {

//     return(
      
//       <AppContainer />

//     )
//   }
// }












// Tutor: Navigate
// const AppSwitchNavigatior = createSwitchNavigator({
//   welcome: { screen: WelcomeScreen },
//   Note: { screen: Notes },
//   NoteUpdate: { screen: NotesUpdate }
//   // DashboardScreen: { screen: AppDrawerNavigator }
// });

// Drawer
const AppSwitchNavigatiorA = createDrawerNavigator({
  welcome: { screen: Welcome },
  Note: { screen: Notes },
  NoteUpdate: { screen: NotesUpdate }
}, {
    contentComponent: drawer,
    drawerWidth: 250
  });

// const AppSwitchNavigatiorA = createStackNavigator({
// });

// Tutor: execute routes
const AppContainer = createAppContainer(AppSwitchNavigatiorA);


export default AppContainer;

