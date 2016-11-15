import React, {Component} from 'react';
import {Text, View} from 'react-native';

/* Styles */
import styles from './styles';

export default class PithreHome extends Component {
  constructor(props){
    super(props);
    console.info("PithreHome: constructor");
  }

  static route = {
    navigationBar: {
      title: 'Home',
      backgroundColor: '#FF5722',
    },
  }

  componentWillMount(){
    console.info("PithreHome: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreHome: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreHome: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreHome: shouldComponentUpdate");
  //   return true;
  // }

  componentWillUpdate(){
    console.info("PithreHome: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreHome: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreHome: componentWillUnmount");
  }

  render(){
    console.info("PithreHome: Render");
    return(
      <View style={styles.container}>
        <Text>PithreHome</Text>
      </View>
    );
  }
}

PithreHome.propTypes = {

};
