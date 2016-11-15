import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TouchableNativeFeedback,Button} from 'react-native';
import PithreListItem from '../listitem';
import { Router } from '../../pithre';
import PithreBack from '../util/back';
/* Styles */
import styles from './styles';

export default class PithreSettings extends Component {
  constructor(props){
    super(props);
    console.info("PithreSettings: constructor");
    this._goToScreen = this._goToScreen.bind(this);
  }

  static route = {
    navigationBar: {
      title: "Settings",
      renderRight: () => (<PithreBack />)
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

  _goToScreen(name) {
    console.info("ROUTE:",name);
    this.props.navigator.push(Router.getRoute(name));
  }

  render(){
    console.info("PithreSettings: Render");
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.list} onPress={()=> this._goToScreen('help')}>
          <Text style={styles.title}>Help</Text>
          <Text style={styles.description}>React Native JS code runs inside this Chrome tab.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={() => this._goToScreen('feedback')}>
          <Text style={styles.title}>Feedback</Text>
          <Text style={styles.description}>Enable Pause On Caught Exceptions for a better debugging experience.</Text>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={() => this._goToScreen('about')}>
          <View style={styles.list}><Text style={styles.title}>About</Text>
          <Text style={styles.description}>Enable Pause On Caught Exceptions for a better debugging experience.</Text></View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

PithreSettings.propTypes = {

};
