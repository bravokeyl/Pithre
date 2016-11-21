import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
/*eslint-disable*/
import PithreIntro from './intro';
import PithreWalk from './walk';
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
    this.pithreBorder = this.pithreBorder.bind(this);
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
  pithreBorder(color="red",width = 2){
    return {
      borderWidth: width,
      borderColor: color,
    };
  }
  render(){
    console.info("PithreWalkThrough: Render");
    return(
      <PithreWalk />
    );
  }
}

PithreWalkThrough.propTypes = {
};
