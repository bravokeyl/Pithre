import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';

/* Styles */
// import styles from './styles';

export default class PithrePicker extends Component {
  constructor(props){
    super(props);
    console.info("PithrePicker: constructor");
    this.state = {
      picked: "Notifications"
    };
  }

  componentWillMount(){
    console.info("PithrePicker: componentWillMount");
  }

  componentDidMount(){
    console.info("PithrePicker: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithrePicker: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithrePicker: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithrePicker: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithrePicker: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithrePicker: componentWillUnmount");
  }

  render(){
    console.info("PithrePicker: Render");
    return(
      <Picker
        selectedValue={this.state.picked}
        mode={"dropdown"}
        onValueChange={(lang) => this.setState({picked: lang})}
        style={{borderWidth:1,borderColor:"red",color:"#000",width: 100}}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Unread" value="Unread" />
      </Picker>
    );
  }
}

PithrePicker.propTypes = {

};
