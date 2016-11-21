import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import AppIntro from 'react-native-app-intro';
/* Styles */
import styles from './styles';

export default class PithreIntro extends Component {
  constructor(props){
    super(props);
    console.info("PithreIntro: constructor");
  }

  componentWillMount(){
    console.info("PithreIntro: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreIntro: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreIntro: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreIntro: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreIntro: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreIntro: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreIntro: componentWillUnmount");
  }
  pithreBorder(color="red",width = 2){
    return {
      borderWidth: width,
      borderColor: color,
    };
  }
  render(){
    console.info("PithreIntro: Render");
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      // img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
      }, {
      title: 'Page 2',
      description: 'Description 2',
      // img: require('../assets/some_image.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    return(
      <AppIntro showDoneButton={false}>
        <View style={[styles.container,this.pithreBorder("blue")]}>
          <View style={[styles.logo,this.pithreBorder("green")]}>
            <Text style={[styles.logoText,this.props.logoText]}>Pithre</Text>
            </View>
          <View style={[styles.body,this.pithreBorder("orange")]}>
            <Text style={styles.bodyHeading}>Layout with Flexbox</Text>
            <Text style={[styles.bodyText,this.pithreBorder("orange")]}>A component can specify the layout of its children using the
              flexbox algorithm.
            </Text>
          </View>
          <View style={[styles.footer,this.pithreBorder("blue")]}>
            <Text>Skip</Text>
            </View>
        </View>
        <View style={[styles.container,this.pithreBorder("blue")]}>
          <View style={[styles.logo,this.pithreBorder("green")]}>
            <Text style={[styles.logoText,this.props.logoText]}>Pithre</Text>
            </View>
          <View style={[styles.body,this.pithreBorder("orange")]}>
            <Text style={styles.bodyHeading}>Layout with Flexbox</Text>
            <Text style={[styles.bodyText,this.pithreBorder("orange")]}>Flexbox is designed to provide a consistent
              layout on different screen sizes.
            </Text>
          </View>
          <View style={[styles.footer,this.pithreBorder("blue")]}>
            <Text>Skip</Text>
            </View>
        </View>
      </AppIntro>
    );
  }
}

PithreIntro.propTypes = {

};
