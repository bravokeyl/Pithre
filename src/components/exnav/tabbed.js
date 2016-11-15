import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
/*eslint-disable*/
import {SlidingTabNavigation, SlidingTabNavigationItem} from '@exponent/ex-navigation';
/*eslint-enable*/
import Icon from "react-native-vector-icons/MaterialIcons";
/* Styles */
import styles from './styles';

export default class PithreExTabbedNav extends Component {
  constructor(props){
    super(props);
    console.info("PithreExTabbedNav: constructor");
    this._goToFirstTab = this._goToFirstTab.bind(this);
    this._goToSecondTab = this._goToSecondTab.bind(this);
  }

  static route = {
    navigationBar: {
      title: 'Sliding Tab Navigation',
      ...SlidingTabNavigation.navigationBarStyles,
    },
  }

  _goToFirstTab(){
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('first');
    });
  }

  _goToSecondTab(){
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('second');
    });
  }

  _renderLabel({route}){
    let title;
    if (route.key === 'first') {
      title = 'First';
    } else if (route.key === 'second') {
      title = 'Second';
    }
    return <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>;
  }

  componentWillMount(){
    console.info("PithreExTabbedNav: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreExTabbedNav: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreExTabbedNav: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreExTabbedNav: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreExTabbedNav: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreExTabbedNav: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreExTabbedNav: componentWillUnmount");
  }

  render(){
    console.info("PithreExTabbedNav: Render");
    return(
      <View style={styles.container}>
        <SlidingTabNavigation
          id="sliding-tab-navigation"
          navigatorUID="sliding-tab-navigation"
          initialTab="first"
          renderLabel={this._renderLabel}
          barBackgroundColor="#0084FF"
          indicatorStyle={styles.tabIndicator} style={{borderWidth:1,borderColor:"orange"}}>
          <SlidingTabNavigationItem id="first">
            <View style={[styles.quoteContainer]}>
              <Text style={styles.quoteMarks}>“</Text>
              <Text style={styles.quoteText}>R2D2, you know better than to trust a strange computer!</Text>
              <Text style={styles.quoteAuthor}>C3PO</Text>
              <TouchableOpacity onPress={this._goToSecondTab}>
                <Icon name="arrow-forward" size={16} style={styles.button} />
              </TouchableOpacity>
            </View>
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="second">
            <View style={styles.quoteContainer}>
              <Text style={styles.quoteMarks}>“</Text>
              <Text style={styles.quoteText}>The best thing about a boolean is even if you are wrong, you are only off by a bit.</Text>
              <Text style={styles.quoteAuthor}>Bryan</Text>
              <TouchableOpacity onPress={this._goToFirstTab}>
                <Icon name="arrow-back" size={16} style={styles.button} />
              </TouchableOpacity>
            </View>
          </SlidingTabNavigationItem>
        </SlidingTabNavigation>
      </View>
    );
  }
}

PithreExTabbedNav.propTypes = {

};
