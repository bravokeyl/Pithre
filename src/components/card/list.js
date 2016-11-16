import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';

import PithreRow from './row';
import PithreData from './data';

/* Styles */
import styles from './styles';

export default class PithreListView extends Component {
  constructor(props){
    super(props);
    console.info("PithreListView: constructor");
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(PithreData),
    };
  }

  componentWillMount(){
    console.info("PithreListView: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreListView: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreListView: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreListView: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreListView: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreListView: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreListView: componentWillUnmount");
  }

  render(){
    console.info("PithreListView: Render");
    return(
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(data) => <PithreRow {...data}/>}
      onEndReached={() => console.log("ListView end reached")}
      />
    );
  }
}

PithreListView.propTypes = {

};
