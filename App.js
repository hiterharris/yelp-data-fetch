import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './components/Card';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.appContainer}>
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
