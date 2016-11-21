import React, {Component} from 'react';
import {Text, View, Picker, StatusBar} from 'react-native';
import PithrePicker from './picker';
/* Styles */
import styles from './styles';

export default class PithreAbout extends Component {
  static route = {

    navigationBar: {
      title: (params) => {
        return params.title || "Site";
      },
      renderTitle: (route,params) => {
        return <PithrePicker />;
      }
    },
  }

  constructor(props){
    super(props);
    console.info("PithreAbout: constructor");
    this.state = {
      notif: "Notifications"
    };
  }

  componentWillMount(){
    console.info("PithreAbout: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreAbout: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreAbout: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreAbout: shouldComponentUpdate");
  //   return true;
  // }

  componentWillUpdate(){
    console.info("PithreAbout: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreAbout: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreAbout: componentWillUnmount");
  }

  render(){
    console.info("PithreAbout: Render");
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Picker
          selectedValue={this.state.notif}
          mode={"dropdown"}
          onValueChange={(lang) => this.setState({language: lang})}
          style={{borderWidth:1,borderColor:"red",color:"#000",width: 100}}>
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Unread" value="Unread" />
        </Picker>
      </View>
    );
  }
}

PithreAbout.propTypes = {

};
