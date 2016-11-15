import React, {Component} from 'react';
import {Text, View} from 'react-native';

/* Styles */
import styles from './styles';

export default class PithreFeedback extends Component {
  constructor(props){
    super(props);
    console.info("PithreFeedback: constructor");
  }

  static route = {
    navigationBar: {
      title: 'Feedback',
    },
  }

  componentWillMount(){
    console.info("PithreFeedback: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreFeedback: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreFeedback: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreFeedback: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreFeedback: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreFeedback: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreFeedback: componentWillUnmount");
  }

  render(){
    console.info("PithreFeedback: Render");
    return(
      <View style={styles.container}>
        <Text>PithreFeedback</Text>
      </View>
    );
  }
}

PithreFeedback.propTypes = {

};
