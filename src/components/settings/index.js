import React, {Component} from 'react';
import {Text, View} from 'react-native';

/* Styles */
import styles from './styles';

export default class PithreSettings extends Component {
  constructor(props){
    super(props);
    console.info("PithreSettings: constructor");
  }

  static route = {
    navigationBar: {
      title: "Settings",
    }
  };

  componentWillMount(){
    console.info("PithreSettings: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreSettings: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreSettings: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreSettings: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreSettings: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreSettings: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreSettings: componentWillUnmount");
  }

  render(){
    console.info("PithreSettings: Render");
    return(
      <View style={styles.container}>
        <Text>PithreSettings</Text>
      </View>
    );
  }
}

PithreSettings.propTypes = {

};
