import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Wimdu</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Header