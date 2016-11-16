import React, { Component } from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
/*eslint-disable*/
import {SlidingTabNavigation, SlidingTabNavigationItem} from '@exponent/ex-navigation';
/*eslint-enable*/
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from './styles';

export default class PithreExTabbedNav extends Component {
  constructor(props){
    super(props);
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

    return <Text style={styles.tabLabel}><Icon name="home" /></Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <SlidingTabNavigation
          id="sliding-tab-navigation"
          navigatorUID="sliding-tab-navigation"
          initialTab="first"
          renderLabel={this._renderLabel}
          barBackgroundColor="#FF5722"
          indicatorStyle={styles.tabIndicator}>
          <SlidingTabNavigationItem id="first">
            <View>
              <Text>First Tab</Text>
              <TouchableOpacity onPress={this._goToSecondTab}>
                <Icon name="arrow-forward" size={16} style={styles.button} />
              </TouchableOpacity>
            </View>
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="second">
            <View>
              <Text>Second Tab</Text>
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
  navigation: React.PropTypes.object
};
