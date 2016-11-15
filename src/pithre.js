import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Pithre extends Component {
  constructor(props){
    super(props);
    console.info("Pithre: constructor");
  }

  componentWillMount(){
    console.info("Pithre: componentWillMount");
  }

  componentDidMount(){
    console.info("Pithre: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("Pithre: componentWillReceiveProps");
  }

  shouldComponentUpdate(){
    console.info("Pithre: shouldComponentUpdate");
  }

  componentWillUpdate(){
    console.info("Pithre: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("Pithre: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("Pithre: componentWillUnmount");
  }

  render(){
    console.info("Pithre: Render");
    return(
      <View>
        <Text>Pithre</Text>
      </View>
    );
  }
}

Pithre.propTypes = {

};
