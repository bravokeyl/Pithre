import React, {Component} from 'react';
import {Text, View, Image, NetInfo,TouchableOpacity,Dimensions,Modal, ToastAndroid,TouchableNativeFeedback, ListView, RefreshControl} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import sites from './dsites';
import {Router} from './pithre';
import PithreData from './dtrackers';
import moment from 'moment';
import axios from 'axios';
import { RadioButtons } from 'react-native-radio-buttons';
import PithreRow from "./components/row";
import PithreRight from "./tright";
import PithreRadio from "./components/radio";
// import RefreshableListView from 'react-native-refreshable-listview';
/* Styles */
import styles from './styles';
const {width,height} = Dimensions.get("window");
const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
const rOptions = [
  "Name Asc",
  "Name Desc",
  "Last modified",
  "Status",
];
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
    this._sortBy = this._sortBy.bind(this);
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(PithreData),
      refreshing: false,
      viewList: true,
      modalVisible: false,
      selectedIndex: 3,
    };
  }

  componentWillMount(){
    this._viewmode = this.props.route.getEventEmitter().addListener('viewmode', this._handleViewMode);
    this._refresh = this.props.route.getEventEmitter().addListener('refresh', this._onRefresh);
    this._sortby = this.props.route.getEventEmitter().addListener('sortby', this._sortBy);
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
    this._sortby.remove();
    console.info("PithreTracker: componentWillUnmount");
  }

  _onPress(i) {
    this.props.navigator.push(Router.getRoute('detail',{ id: i}));
  }

  _onRefresh() {
    let self = this;
    // NetInfo.fetch().done((reach) => {
    //   console.log('Initial: ' + reach);
    // });
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected) {
        this.setState({refreshing: true});
        axios.defaults.timeout = 3000;
        let s= moment().format("x");
        // console.log(s);
        axios.get("https://2fuzad69j3.execute-api.us-east-1.amazonaws.com/dev/devices/")
        .then((res) => {
          let e = moment().format("x")-s;
          this.setState({
            refreshing: false,
            dataSource: ds.cloneWithRows(res.data)
          });
          console.log(res.data);
          console.log(e,"After console data",moment().format("x")-s);
        })
        .catch((error) => {
          this.setState({
            refreshing: false,
          });
          ToastAndroid.show(error.message, ToastAndroid.SHORT,);
          console.info(moment().format("x")-s);
          console.log(error,error.message,error.response);
        });
      } else{
        ToastAndroid.show("Unable to refresh: Check your network connection, then swipe down to retry.", ToastAndroid.LONG,);
      }
      console.info((isConnected ? 'online' : 'offline'));
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

  _sortBy(){
    console.log("HandleSortBy",this.state.modalVisible);
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  _handleRefresh(){

  }

  renderOption(option, selected, onSelect, index){
    console.log(option,selected,index);
    return (
      <PithreRadio onPress={onSelect} key={index} label={option} selected={selected}/>
    );
  }

  setSelectedOption(selectedOption,selectedIndex){
    console.log(selectedOption,selectedIndex,this.state);
    this.setState({
      selectedIndex,
    });
    setTimeout(()=> this.setState({modalVisible: false,}),100);
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

        <Modal
          animationType={"fade"}
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setState({modalVisible:false});}}
          >
           <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
            <View style={{width: width-56,backgroundColor:"#fff",paddingLeft:8,paddingRight:16,paddingTop:16,paddingBottom:16,}}>
              <Text style={{fontWeight: "bold",fontSize: 18,color: "rgba(0,0,0,0.87)",marginBottom:10,paddingLeft:8,}}>Sort by</Text>
              <RadioButtons options={rOptions} selectedIndex={this.state.selectedIndex}
                onSelection={(o,i) => this.setSelectedOption(o,i)}
                renderOption={this.renderOption}/>
            </View>
           </View>
        </Modal>
    </View>
    );
  }
}

PithreTracker.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};
