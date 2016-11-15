import React, {Component} from 'react';
import {Text, View} from 'react-native';
/*eslint-disable*/
import {StackNavigation,DrawerNavigation,DrawerNavigationItem} from '@exponent/ex-navigation';
/*eslint-enable*/
import Icon from "react-native-vector-icons/MaterialIcons";
import {Router} from '../../pithre';

import listItems from "./list";

/* Styles */
import styles from './styles';

export default class PithreExDrawerNav extends Component {
  constructor(props){
    super(props);
    console.info("PithreExDrawerNav: constructor");
    this._renderHeader = this._renderHeader.bind(this);
  }

  componentWillMount(){
    console.info("PithreExDrawerNav: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreExDrawerNav: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreExDrawerNav: componentWillReceiveProps");
  }

  shouldComponentUpdate(){
    console.info("PithreExDrawerNav: shouldComponentUpdate");
  }

  componentWillUpdate(){
    console.info("PithreExDrawerNav: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreExDrawerNav: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreExDrawerNav: componentWillUnmount");
  }

  _renderHeader(){
    return (
      <View style={styles.header} />
    );
  }

  _renderTitle(text, isSelected){
    let divider;
    if(text === "Subheader"){
      divider = {
        color: 'rgba(0,0,0,0.54)',
        marginLeft: 0,
      };
    }
    return (
      <Text numberOfLines={1}
        style={[styles.headerListItem, isSelected ? styles.selectedText : null,divider]}>
        {text}
      </Text>
    );
  }

  _renderIcon(name, isSelected){
    return (
      <Icon
        style={[styles.icon, isSelected ? styles.selectedText : null]}
        name={name}
        size={24}
      />
    );
  }

  render(){
    console.info("PithreExDrawerNav: Render");
    let navList = [];
    listItems.map((e,i)=>{
      if(!e.subheader){
        navList.push(
          <DrawerNavigationItem key={e.route} id={e.id}
          selectedStyle={styles.selectedItemStyle}
          style={[{height:48},e.style]}
          renderTitle={isSelected => this._renderTitle(e.title, isSelected)}
          renderIcon={isSelected => this._renderIcon(e.icon, isSelected)}
          >
            <StackNavigation id={e.sid}
              defaultRouteConfig={{
                navigationBar: {
                  backgroundColor: '#FF5722',
                  tintColor: '#fff',
                }
              }}
              initialRoute={Router.getRoute(e.route)}/>
          </DrawerNavigationItem>
        );
      }else {
        navList.push(
          <DrawerNavigationItem key={e.route} id={e.id} style={e.style}
          renderTitle={isSelected => this._renderTitle(e.title, isSelected)}/>
        );
      }
    });

    return(
      <DrawerNavigation id="main"
        initialItem="one"
        drawerWidth={300}
        renderHeader={this._renderHeader}>
        {navList}
      </DrawerNavigation>
    );
  }
}

PithreExDrawerNav.propTypes = {

};
