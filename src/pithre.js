import React, {Component} from 'react';
import {Text, View} from 'react-native';
/*eslint-disable*/
import {createRouter, NavigationProvider, StackNavigation} from '@exponent/ex-navigation';
import PithreExNav from './components/exnav';
import PithreExDrawerNav from './components/exnav/drawerNav';


import PithreAbout from './about';
import PithreHome from './home';
import PithreSettings from './components/settings';
import PithreHelp from './components/help';
import PithreFeedback from './components/feedback';
import PithreExTabbedNav from './components/exnav/tabbed';

import PithreWalkThrough from './components/walkthrough';
/*eslint-enable*/
/* Styles */
import styles from './styles';

export const Router = createRouter(() => ({
  home: () => PithreHome,
  about: () => PithreAbout,
  settings: () => PithreSettings,
  help: () => PithreHelp,
  feedback: () => PithreFeedback,
  tabs: () => PithreExTabbedNav,
  walkthrough: () => PithreWalkThrough,
}));

export default class Pithre extends Component {
  constructor(props){
    super(props);
    console.info("Pithre: constructor");
  }

  componentWillMount(){
    console.info("Pithre: componentWillMount");
  }

  componentDidMount(){
    console.info("Pithre: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("Pithre: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("Pithre: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("Pithre: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("Pithre: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("Pithre: componentWillUnmount");
  }

  render(){
    console.info("Pithre: Render");
    return(
      <NavigationProvider router={Router}>
        <PithreExDrawerNav />
      </NavigationProvider>
    );
  }
}

Pithre.propTypes = {

};
