import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback,TouchableOpacity, Dimensions, Modal, TouchableHighlight} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import PithreRadioButtons from "../components/radiobuttons";
import { RadioButtons } from 'react-native-radio-buttons';
import PithreRadio from "./radio";
const { width, height} = Dimensions.get("window");

/* Styles */
import Gstyles from '../styles';
import styles from './styles';
const borderUtil = function(c="red",w=0){
  return {
    borderWidth: w,
    borderColor: c,
  };
};

const rOptions = [
  "Name Asc",
  "Name Desc",
  "Last modified",
  "Status",
];

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

  componentWillReceiveProps(newProps){
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
    console.info("PithreRow: Render",this.state);
    return(
      <View style={[Gstyles.blackDivider,this.props.viewMode? styles.listRow : styles.gridRow,]}>
        <View style={[this.props.viewMode ? Gstyles.listLeftIcon : Gstyles.gridLeftIcon ,styles.listCol,borderUtil("green")]}>
          <Icon name={this.props.leftIcon} size={this.props.viewMode ? 20:16} color="green"/>
        </View>
        <TouchableNativeFeedback onPress={() => this.props.onPress(this.props.primaryText)}>
          <View style={[styles.listCol,{flexGrow: 1,},borderUtil()]}>
            <Text style={[this.props.viewMode ?Gstyles.primaryText:Gstyles.primaryTextCondensed]}>{this.props.primaryText}</Text>
            { this.props.viewMode && (<Text style={[Gstyles.secondaryText]}>{this.props.secondaryText}</Text>)}
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => { console.log("Right Icon pressed");}}>
          <View style={[this.props.viewMode ?Gstyles.listRightIcon:Gstyles.gridRightIcon,styles.listCol,borderUtil("blue")]}>
            <Icon name={this.props.rightIcon} size={this.props.viewMode ? 20:16} color="rgba(0,0,0,0.54)" style={[borderUtil("blue")]}/>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

PithreRow.propTypes = {
  leftIcon: React.PropTypes.string,
  rightIcon: React.PropTypes.string,
  viewMode: React.PropTypes.bool,
  primaryText: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,]),
  secondaryText: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,]),
  onPress: React.PropTypes.func,
};
