import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PithreRadio from "./radio";

/* Styles */
import styles from './styles';

export default class PithreRadioButtons extends Component {
  constructor(props){
    super(props);
    console.info("PithreRadioButtons: constructor");
    this.state = {
      selectedOption: null,
      selectedIndex: null,
    };
    this.selectOption = this.selectOption.bind(this);
  }

  componentWillMount(){
    this.copySelectedOptionFromProps(this.props);
    console.info("PithreRadioButtons: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreRadioButtons: componentDidMount");
  }

  componentWillReceiveProps(newProps){
    this.copySelectedOptionFromProps(newProps);
    console.info("PithreRadioButtons: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreRadioButtons: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreRadioButtons: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreRadioButtons: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreRadioButtons: componentWillUnmount");
  }

  copySelectedOptionFromProps({selectedOption, selectedIndex}){
    this.setState({
      selectedOption,
      selectedIndex,
    });
  }

  selectOption(selectedOption, selectedIndex){
    console.log(selectedOption, selectedIndex);
    this.setState({
      selectedOption,
      selectedIndex,
    });
    this.props.onSelection(selectedOption, selectedIndex);
  }

  render(){
    console.info("PithreRadioButtons: Render");
    return(
      <View>
      {
        this.props.options.map((o,i)=>{
          return (<PithreRadio label={o} key={i}
          onPress={(i,o) => this.selectOption}
          selected={this.state.selectedIndex === i ? true:false} />);
        })
      }
      </View>
    );
  }
}

PithreRadioButtons.propTypes = {
  // options: React.PropTypes.Array,
};
