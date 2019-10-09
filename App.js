import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx'},
  params: {
    location: 'charlotte',
  }
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  getData() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => response )
    .then(data => this.setState({ data }))
  }

  componentDidMount() {
    return this.getData();
  }
  
  render() {
    console.log(this.state.data);
    return (
      <View style={styles.container}>
        <Text>Yelp</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});