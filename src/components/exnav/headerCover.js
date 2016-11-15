import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import headerCover from "../../../img/header-bg.jpg";
import headerAvatar from "../../../img/avatar.jpg";

/* Styles */
import styles from './styles';

export default class PithreHeaderCover extends Component {
  constructor(props){
    super(props);
    console.info("PithreHeaderCover: constructor");
  }

  componentWillMount(){
    console.info("PithreHeaderCover: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreHeaderCover: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreHeaderCover: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreHeaderCover: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreHeaderCover: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreHeaderCover: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreHeaderCover: componentWillUnmount");
  }

  render(){
    console.info("PithreHeaderCover: Render");
    return(
      <Image source={headerCover} style={styles.header}>
        <Image source={headerAvatar} style={[styles.headerAvatar]} />
        <View style={[styles.headerSubtitle]}>
          <Text style={[styles.headerName]}>Azure Power</Text>
          <Text style={[styles.headerEmail]}>veerabhadra.reddy@nuevo-sol.com</Text>
        </View>
      </Image>
    );
  }
}

PithreHeaderCover.propTypes = {

};
