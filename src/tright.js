import React, {Component} from 'react';
import {Text, View, Image,Picker, TouchableOpacity, TouchableNativeFeedback, ListView, RefreshControl} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import sites from './dsites';
import {Router} from './pithre';
import PithreData from './dtrackers';
import moment from 'moment';
import axios from 'axios';

export default class PithreRight extends Component {
  constructor(props){
    super(props);
    console.info("PithreRight: constructor");
    this.state = {
      viewList: true,
    };
  }

  componentWillMount(){
    console.info("PithreRight: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreRight: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreRight: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreRight: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreRight: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreRight: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreRight: componentWillUnmount");
  }

  render(){
    console.info("PithreRight: Render");
    return(
      <View style={{flex:1,flexDirection:'row',alignItems:'center',
        justifyContent:'center',}}>
        <TouchableOpacity onPress={() => { this.props.emitter.emit('viewmode');console.log("Emit Reset Event",this.props.emitter);}}
          style={{width: 48,height: 48,justifyContent:'center',alignItems:"center",}}>
          <Icon name={"view-module"} color="#fff" size={24}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.props.emitter.emit('refresh');console.log("Refresh");}}
          style={{width: 48,height: 48,justifyContent:'center',alignItems:"center",}}>
          <Icon name="refresh" color="#fff" size={24}/>
        </TouchableOpacity>
      </View>
    );
  }
}

PithreRight.propTypes = {

};
