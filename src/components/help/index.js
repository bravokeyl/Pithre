import React, {Component} from 'react';
import {Text, View} from 'react-native';

/* Styles */
import styles from './styles';

export default class PithreHelp extends Component {
  constructor(props){
    super(props);
    console.info("PithreHelp: constructor");
  }

  static route = {
    navigationBar: {
      title: "Help",
    }
  };

  componentWillMount(){
    console.info("PithreHelp: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreHelp: componentDidMount");
  }

  // componentWillReceiveProps(){
  //   console.info("PithreHelp: componentWillReceiveProps");
  // }

  // shouldComponentUpdate(){
  //   console.info("PithreHelp: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreHelp: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreHelp: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreHelp: componentWillUnmount");
  }

  render(){
    console.info("PithreHelp: Render");
    return(
      <View style={styles.container}>
        <Text>PithreHelp</Text>
      </View>
    );
  }
}

PithreHelp.propTypes = {

};
