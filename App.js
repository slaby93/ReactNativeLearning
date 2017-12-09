import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import HelloWorld from './HelloWorld'
import Header from './Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
