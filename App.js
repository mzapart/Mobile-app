import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as ROUTES from "./constants/routes";
import RandomMem from "./components/RandomMem";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Navigation from "./components/Navigation"


export default class App extends React.Component {

  render() {
    return( 
      <View style={styles.container}>

        <Button
        title="hit me"
      
          
    
        />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
