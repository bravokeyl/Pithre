import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height} = Dimensions.get("window");
/* Styles */
import styles from './styles';

export default class PithreRadio extends Component {
  constructor(props){
    super(props);
    // console.info("PithreRadio: constructor");
  }

  componentWillMount(){
    // console.info("PithreRadio: componentWillMount");
  }

  componentDidMount(){
    // console.info("PithreRadio: componentDidMount");
  }

  componentWillReceiveProps(){
    // console.info("PithreRadio: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreRadio: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    // console.info("PithreRadio: componentWillUpdate");
  }

  componentDidUpdate(){
    // console.info("PithreRadio: componentDidUpdate");
  }

  componentWillUnmount(){
    // console.info("PithreRadio: componentWillUnmount");
  }

  render(){
    console.info("PithreRadio: Render");
    return(
      <TouchableNativeFeedback onPress={this.props.onPress}
        background={TouchableNativeFeedback.Ripple()}>
          <View style={{flexDirection:"row",flexGrow:1,height:48,alignItems:"center",}}>
            <Icon style={{paddingRight: 16,paddingLeft:16,}}
              name={this.props.selected ? 'radio-button-checked' : 'radio-button-unchecked'}
              size={23} color="blue" />
            <Text>{this.props.label}</Text>
          </View>
      </TouchableNativeFeedback>
    );
  }
}

PithreRadio.propTypes = {
  label: React.PropTypes.string,
  selected: React.PropTypes.bool,
  onPress: React.PropTypes.func,
};
