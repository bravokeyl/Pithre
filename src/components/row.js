import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";

/* Styles */
import Gstyles from '../styles';
import styles from './styles';
const borderUtil = function(c="red",w=2){
  return {
    borderWidth: w,
    borderColor: c,
  };
};

export default class PithreRow extends Component {
  constructor(props){
    super(props);
    console.info("PithreRow: constructor");
  }

  componentWillMount(){
    console.info("PithreRow: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreRow: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreRow: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreRow: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreRow: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreRow: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreRow: componentWillUnmount");
  }

  render(){
    console.info("PithreRow: Render");
    return(
      <View style={[Gstyles.blackDivider,styles.listRow,]}>
        <View style={[Gstyles.listLeftIcon,styles.listCol,]}>
          <Icon name="folder" size={20} color="green"/>
        </View>
        <TouchableNativeFeedback onPress={() => this.props.onPress(this.props.primaryText)}>
          <View style={[styles.listCol,{flexGrow: 1},]}>
            <Text style={[Gstyles.primaryText]}>{this.props.primaryText}</Text>
            <Text style={[Gstyles.secondaryText]}>{this.props.secondaryText}</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={[Gstyles.listRightIcon,styles.listCol,]}>
          <Icon name="more-vert" size={20} color="rgba(0,0,0,0.54)"/>
        </View>
      </View>
    );
  }
}

PithreRow.propTypes = {
  leftIcon: React.PropTypes.string,
  rightIcon: React.PropTypes.string,
  primaryText: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,]),
  secondaryText: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,]),
  onPress: React.PropTypes.func,
};
