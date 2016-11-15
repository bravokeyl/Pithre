import React, {Component} from 'react';
import {Text, View} from 'react-native';
/*eslint-disable*/
import {StackNavigation,DrawerNavigation,DrawerNavigationItem} from '@exponent/ex-navigation';
/*eslint-enable*/
import Icon from "react-native-vector-icons/MaterialIcons";
import {Router} from '../../pithre';

/* Styles */
import styles from './styles';

export default class PithreNavItem extends Component {
  constructor(props){
    super(props);
    console.info("PithreNavItem: constructor");
  }

  componentWillMount(){
    console.info("PithreNavItem: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreNavItem: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreNavItem: componentWillReceiveProps");
  }

  shouldComponentUpdate(){
    console.info("PithreNavItem: shouldComponentUpdate");
  }

  componentWillUpdate(){
    console.info("PithreNavItem: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreNavItem: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreNavItem: componentWillUnmount");
  }

  render(){
    console.info("PithreNavItem: Render");
    return(
      <DrawerNavigationItem id="one"
      selectedStyle={styles.selectedItemStyle}
      renderTitle={isSelected => this._renderTitle('Home', isSelected)}
      renderIcon={isSelected => this._renderIcon('home', isSelected)}
      >
        <StackNavigation id="home" initialRoute={Router.getRoute('home')} defaultRouteConfig={{
            navigationBar: {
              backgroundColor: 'red',
              tintColor: '#fff',
            },
          }} />
      </DrawerNavigationItem>
    );
  }
}

PithreNavItem.propTypes = {

};
