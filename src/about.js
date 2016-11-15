import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';

/* Styles */
import styles from './styles';

export default class PithreAbout extends Component {
  constructor(props){
    super(props);
    console.info("PithreAbout: constructor");
  }

  static route = {
    navigationBar: {
      title: 'About',
      backgroundColor: '#000',
      color: "#fff",
    },
  }

  componentWillMount(){
    console.info("PithreAbout: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreAbout: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreAbout: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreAbout: shouldComponentUpdate");
  //   return true;
  // }

  componentWillUpdate(){
    console.info("PithreAbout: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreAbout: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreAbout: componentWillUnmount");
  }

  render(){
    console.info("PithreAbout: Render");
    return(
      <View style={styles.container}>
        <Text>PithreAbout</Text>
      </View>
    );
  }
}

PithreAbout.propTypes = {

};
