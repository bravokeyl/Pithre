import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Router from '../../pithre';

/* Styles */
import styles from './styles';

// const Router = createRouter(() => ({
//   home: () => PithreExNav,
//   about: () => PithreAbout,
// }));

export default class PithreExNav extends Component {
  constructor(props){
    super(props);
    console.info("PithreExNav: constructor");
    this.onPress = this.onPress.bind(this);
  }

  static route = {
    navigationBar: {
      title: 'Home',
    }
  };

  componentWillMount(){
    console.info("PithreExNav: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreExNav: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreExNav: componentWillReceiveProps");
  }

  shouldComponentUpdate(){
    console.info("PithreExNav: shouldComponentUpdate");
  }

  componentWillUpdate(){
    console.info("PithreExNav: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreExNav: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreExNav: componentWillUnmount");
  }

  onPress() {
    this.props.navigator.push(Router.getRoute('about'));
  }

  render(){
    console.info("PithreExNav: Render");
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>HomeScreen!</Text>
        <Text onPress={this.onPress}>Press Me</Text>
      </View>
    );
  }
}

PithreExNav.propTypes = {

};
