import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import PithreCard from './components/card';
import Icon from "react-native-vector-icons/MaterialIcons";

/* Styles */
import styles from './styles';

export default class PithreHome extends Component {
  constructor(props){
    super(props);
    console.info("PithreHome: constructor");
  }

  static route = {
    navigationBar: {
      title: 'Home',
      renderRight: () => {
        return(
          <View style={{flex:1,flexDirection:'row',alignItems:'center',
            justifyContent:'center',marginRight:16}}>
            <TouchableOpacity style={{width: 48,height: 48,justifyContent:'center',alignItems:"center",}}>
              <Icon name="notifications-active" color="#fff" size={24}/>
            </TouchableOpacity>
          </View>
        )
      }
    },
  }

  componentWillMount(){
    console.info("PithreHome: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreHome: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreHome: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreHome: shouldComponentUpdate");
  //   return true;
  // }

  componentWillUpdate(){
    console.info("PithreHome: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreHome: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreHome: componentWillUnmount");
  }

  render(){
    console.info("PithreHome: Render");
    return(
      <View style={styles.container}>
        <PithreCard title={"PithreHomeCard"}/>
      </View>
    );
  }
}

PithreHome.propTypes = {

};
