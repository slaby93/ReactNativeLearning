import React, { Component } from 'react';
 import { AppRegistry, Text, StyleSheet } from 'react-native'

 export default class HelloWorld extends Component {
  constructor(){
    super();
    this.state = {
      number: 0
    }
    setInterval(()=>{
      this.setState({number: this.state.number + 1})
    }, 1000)
  }

   render(){
     const { number } = this.state
     console.log('number',number);
     return (
       <Text style={styles.container}>Hello World: {number}</Text>
     )
   }
 }

 const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});


 AppRegistry.registerComponent('HelloWorld', ()=> HelloWorld)