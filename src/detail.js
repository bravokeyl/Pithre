import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TouchableNativeFeedback, ListView, RefreshControl, ActivityIndicator} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import sites from './dsites';
import {Router} from './pithre';
import PithreData from './dtrackers';
import moment from 'moment';
import axios from 'axios';

/* Styles */
import styles from './styles';
const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
export default class PithreDetail extends Component {
  static route = {
    navigationBar: {
      title: (params) => {
        return params.id || "Detail Page";
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
    console.info("PithreDetail: constructor");
    this._onPress = this._onPress.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      dataSource: {},
      refreshing: false,
      loading: true,
    };
  }

  componentWillMount(){
    console.info("PithreDetail: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreDetail: componentDidMount");
    this._onRefresh();
  }

  componentWillReceiveProps(){
    console.info("PithreDetail: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreDetail: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreDetail: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreDetail: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreDetail: componentWillUnmount");
  }

  _onPress(i) {
    this.props.navigator.push(Router.getRoute('detail',{ id: i}));
  }

  _onRefresh() {
    this.setState({refreshing: true});
    axios.get("https://2fuzad69j3.execute-api.us-east-1.amazonaws.com/dev/devices/NGT-AZP-Q4-022")
    .then((res) => {
      this.setState({
        refreshing: false,
        loading: false,
        dataSource: ds.cloneWithRows(res.data.Items)
      });
      console.log(res.data.Items);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _renderRow(data) {
    return (
      <TouchableNativeFeedback>
        <View style={{paddingLeft: 16,paddingRight: 16,paddingBottom: 10,paddingTop: 10,backgroundColor: "#fff",borderBottomWidth: 1,borderColor: "#ccc",}}>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:"row",}}>
            <Text style={{fontFamily:"Roboto",fontSize: 16,color:"#000"}}>{data.trackerId}</Text>
            <Text style={{fontSize: 14}}>{data.sunAngle}</Text>
          </View>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:"row",}}>
            <Text style={{fontSize: 14,color:"#333"}}>{moment(data.ISTDateTime).format("MM-DD-YYYY HH:mm")}</Text>
            <Text style={{fontSize: 14,}}>{data.trackerAngle}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render(){
    console.info("PithreDetail: Render");
    return(
      <View style={{flex:1,paddingBottom: 16,width: undefined,height: undefined,}}>
        {
          this.state.loading ? (
            <View style={{flex:1,justifyContent:'center','alignItems':'center'}}>
              <ActivityIndicator
                animating={this.state.loading}
                style={[{height: 80}]}
                size="large"
                color="orange"
              />
            </View>): (
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
            style={[{padding: 0}]}/>)
        }
      </View>
    );
  }
}

PithreDetail.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};
