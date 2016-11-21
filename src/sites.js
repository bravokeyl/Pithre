import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TouchableNativeFeedback, ListView} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import sites from './dsites';
import {Router} from './pithre';
import find from 'lodash/find';
/* Styles */
import styles from './styles';

export default class PithreSite extends Component {

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
    console.info("PithreSite: constructor");
    this._onPress = this._onPress.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    // let s = sites.find((i)=>{
    //   if(i[this.props.route.params.id] !== undefined ){
    //     console.log(i,"Match",i[this.props.route.params.id]);
    //     return i[this.props.route.params.id];
    //   }
    // });
    let picked = find(sites,e => e[this.props.route.params.id] != undefined );
    console.log(picked[this.props.route.params.id],"Picked");
    this.state = {
      dataSource: ds.cloneWithRows(picked[this.props.route.params.id]),
    };
  }

  componentWillMount(){
    console.info("PithreSite: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreSite: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreSite: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreSite: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreSite: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreSite: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreSite: componentWillUnmount");
  }

  _onPress(i,c) {
    this.props.navigator.push(Router.getRoute('about',{ id: i,title: c}));
  }

  _renderRow(data) {
    return (
      <TouchableNativeFeedback onPress={() => this._onPress(data.id,data.name)}>
        <View style={{padding: 16,borderRadius:2,elevation:4,marginBottom: 10,backgroundColor: "#a72c19"}}>
          <Text style={{fontSize: 20,color: "#fff"}}>{data.name}</Text>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:"row",}}>
            <Text style={{fontSize: 14,color: "#fff"}}>{data.location}</Text>
            <Text style={{fontSize: 14,color: "#fff"}}>{data.capacity}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render(){
    console.info("PithreSite: Render");
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

PithreSite.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};
