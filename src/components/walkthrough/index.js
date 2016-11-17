import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
/*eslint-disable*/
import Swiper from 'react-native-swiper';
/*eslint-enable*/

/* Styles */
import styles from './styles';

export default class PithreWalkThrough extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  constructor(props){
    super(props);
    console.info("PithreWalkThrough: constructor");
  }

  componentWillMount(){
    console.info("PithreWalkThrough: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreWalkThrough: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreWalkThrough: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreWalkThrough: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreWalkThrough: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreWalkThrough: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreWalkThrough: componentWillUnmount");
  }

  render(){
    console.info("PithreWalkThrough: Render");
    return(
      <View style={styles.container}>
        <Text>PithreWalkThrough</Text>
      </View>
    );
  }
}

PithreWalkThrough.propTypes = {

};
