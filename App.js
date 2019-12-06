import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
      data: '',
    }
  }

  getData() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
      // .then(response => {
      //   return response;
      // })
    .then(data => this.setState({ data }))
  }

  componentDidMount() {
    return this.getData();
  }
  
  render() {
    const data = this.state.data.data;
    console.log(data);
    return (
      <View style={styles.container}>
        <Text>Response: </Text>
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
  image: {
    width: '97.5%',
    height: '22%',
  },
});
