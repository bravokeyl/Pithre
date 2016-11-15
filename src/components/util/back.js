import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
/* Styles */
import styles from './styles';

export default class PithreBack extends Component {
  constructor(props){
    super(props);
    console.info("PithreBack: constructor");
  }

  componentWillMount(){
    console.info("PithreBack: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreBack: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreBack: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreBack: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreBack: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreBack: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreBack: componentWillUnmount");
  }

  render(){
    console.info("PithreBack: Render");
    return(
      <TouchableOpacity onPress={() => {console.log("hola!");}} style={{paddingTop: 16}}>
        <Icon
          name="more-vert"
          size={30}
          color={"#fff"}
        />
      </TouchableOpacity>
    );
  }
}

PithreBack.propTypes = {

};
