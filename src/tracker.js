import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TouchableNativeFeedback, ListView, RefreshControl} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import sites from './dsites';
import {Router} from './pithre';
import PithreData from './dtrackers';
import moment from 'moment';
import axios from 'axios';

// import RefreshableListView from 'react-native-refreshable-listview';
/* Styles */
import styles from './styles';
const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
export default class PithreTracker extends Component {

  static route = {
    navigationBar: {
      title: (params) => {
        return params.title || "Home";
      },
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
    console.info("PithreTracker: constructor");
    this._onPress = this._onPress.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(PithreData),
      refreshing: false,
    };
  }

  componentWillMount(){
    console.info("PithreTracker: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreTracker: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreTracker: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreTracker: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreTracker: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreTracker: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreTracker: componentWillUnmount");
  }

  _onPress(i,c) {
    // this.props.navigator.push(Router.getRoute('about',{ id: i,title: c}));
  }

  _onRefresh() {
    this.setState({refreshing: true});
    axios.get("https://2fuzad69j3.execute-api.us-east-1.amazonaws.com/dev/devices/")
    .then((res) => {
      const dso = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
      this.setState({
        refreshing: false,
        dataSource: ds.cloneWithRows(res.data)
      });
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _renderRow(data) {
    return (
      <TouchableNativeFeedback onPress={() => this._onPress()}>
        <View style={{paddingLeft: 16,paddingRight: 16,paddingBottom: 10,paddingTop: 10,backgroundColor: "#fff",borderBottomWidth: 1,borderColor: "#ccc",}}>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:"row",}}>
            <Text style={{fontFamily:"Roboto",fontSize: 16,color:"#000"}}>{data.id}</Text>
            <Text style={{fontSize: 14,color: data.status ? "green": "red"}}>{data.status ? "InSync": "Not Working"}</Text>
          </View>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:"row",}}>
            <Text style={{fontSize: 14,color:"#333"}}>{moment(data.lastupdated).fromNow()}</Text>
            <Text style={{fontSize: 14,color: data.status ? "green": "red"}}>{data.status ? "Live": "Offline"}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render(){
    console.info("PithreTracker: Render");
    return(
      <View style={{paddingBottom: 16}}>
        <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        dataSource={this.state.dataSource}
        renderRow={(data) => this._renderRow(data)}
        onEndReached={() => console.log("ListView end reached")}
        style={[{padding: 0}]}/>
      </View>
    );
  }
}

PithreTracker.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};
