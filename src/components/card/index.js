import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';

/* Styles */
import styles from './styles';

export default class PithreCard extends Component {
  constructor(props){
    super(props);
    console.info("PithreCard: constructor");
  }

  componentWillMount(){
    console.info("PithreCard: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreCard: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreCard: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreCard: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreCard: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreCard: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreCard: componentWillUnmount");
  }

  render(){
    console.info("PithreCard: Render");
    return(
      <View style={styles.container}>
        <Text>PithreCard: {this.props.title}</Text>
      </View>
    );
  }
}

PithreCard.propTypes = {
  title: React.PropTypes.string,
};
