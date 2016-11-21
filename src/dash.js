import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TouchableNativeFeedback, ListView} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import cardImg from '../img/teaser.png';
import {Router} from './pithre';
import clients from './clients';
/* Styles */
import styles from './styles';

export default class PithreDash extends Component {
  static route = {
    navigationBar: {
      title: 'Dashboard',
      renderRight: () => {
        return(
          <View style={{flex:1,flexDirection:'row',alignItems:'center',
            justifyContent:'center',marginRight:16}}>
            <TouchableOpacity style={{width: 48,height: 48,justifyContent:'center',alignItems:"center",}}>
              <Icon name="notifications-active" color="#fff" size={24}/>
            </TouchableOpacity>
          </View>
        );
      }
    },
  }

  constructor(props){
    super(props);
    console.info("PithreDash: constructor");
    this._onPress = this._onPress.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(clients),
    };
  }

  componentWillMount(){
    console.info("PithreDash: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreDash: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreDash: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreDash: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreDash: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreDash: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreDash: componentWillUnmount");
  }

  _onPress(i,c) {
    this.props.navigator.push(Router.getRoute('walkthrough',{id: i,title: c}));
  }

  _renderRow(data) {
    return (
      <TouchableNativeFeedback onPress={() => this._onPress(data.id,data.name)}>
        <View style={{padding: 16,borderRadius:2,elevation:4,marginBottom: 10,backgroundColor: "#a72c19"}}>
          <Text style={{fontSize: 20,color: "#fff"}}>{data.name}</Text>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:"row",}}>
            <Text style={{fontSize: 14,color: "#fff"}}>{data.sites[0].location}</Text>
            <Text style={{fontSize: 14,color: "#fff"}}>{data.capacity}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render(){
    console.info("PithreDash: Render");
    return(
      <View style={{paddingBottom: 16}}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => this._renderRow(data)}
        onEndReached={() => console.log("ListView end reached")}
        style={[{padding: 16}]}
        />
      </View>
    );
  }
}

PithreDash.propTypes = {
  navigator: React.PropTypes.object,
};
