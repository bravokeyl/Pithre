import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity,Dimensions, ToastAndroid,TouchableNativeFeedback, ListView, RefreshControl} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import sites from './dsites';
import {Router} from './pithre';
import PithreData from './dtrackers';
import moment from 'moment';
import axios from 'axios';

import PithreRow from "./components/row";
import PithreRight from "./tright";

// import RefreshableListView from 'react-native-refreshable-listview';
/* Styles */
import styles from './styles';
const {width,height} = Dimensions.get("window");
const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
export default class PithreTracker extends Component {

  static route = {
    navigationBar: {
      title: (params) => {
        return params.title || "Home";
      },
      renderRight: ({ config: { eventEmitter } }) => {
        // console.log("ViewMode",eventEmitter);
        return(
          <PithreRight emitter={eventEmitter} />
        );
      }
    },
  }

  constructor(props){
    super(props);
    console.info("PithreTracker: constructor");
    this._onPress = this._onPress.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._handleViewMode = this._handleViewMode.bind(this);
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(PithreData),
      refreshing: false,
      viewList: true,
    };
  }

  componentWillMount(){
    this._viewmode = this.props.route.getEventEmitter().addListener('viewmode', this._handleViewMode);
    this._refresh = this.props.route.getEventEmitter().addListener('refresh', this._onRefresh);
    console.info("PithreTracker: componentWillMount");
  }

  componentDidMount(){
    this._onRefresh();
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
    this._viewmode.remove();
    this._refresh.remove();
    console.info("PithreTracker: componentWillUnmount");
  }

  _onPress(i) {
    this.props.navigator.push(Router.getRoute('detail',{ id: i}));
  }

  _onRefresh() {
    let self = this;
    this.setState({refreshing: true});
    axios.get("https://2fuzad69j3.execute-api.us-east-1.amazonaws.com/dev/devices/")
    .then((res) => {
      this.setState({
        refreshing: false,
        dataSource: ds.cloneWithRows(res.data)
      });
      console.log(res.data);
    })
    .catch((error) => {
      this.setState({
        refreshing: false,
      });
      ToastAndroid.show(error.toString(), ToastAndroid.LONG,);
      console.log(error.toString(),typeof error);
    });
  }

  _renderRow(data) {
    console.log("Rendering Row Again");
    return (
      <PithreRow leftIcon={"folder"} rightIcon={"more-vert"}
        primaryText={data.id} secondaryText={moment(data.lastupdated).format("Do MMM YYYY, HH:mm")}
        viewMode={this.state.viewList}
        onPress={() => this._onPress(data.id)} />
    );
  }

  _handleViewMode(){
    console.log("HandleVMBefore",this.state.viewList);
    this.setState({
      viewList: !this.state.viewList,
    });
  }

  _handleRefresh(){

  }

  render(){
    console.info("PithreTracker: Render");
    console.log("HandleVMAfter",this.state.viewList);
    return(
      <View style={{paddingBottom: 16,}}>
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
        contentContainerStyle={[{padding: 0,flexWrap:"wrap",flexDirection: this.state.viewList?"column":"row",}]}/>
    </View>
    );
  }
}

PithreTracker.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};
