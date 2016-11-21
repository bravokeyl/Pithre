import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
/*eslint-disable*/
import Swiper from 'react-native-swiper';
/*eslint-enable*/

import pwImage1 from '../../../img/8.jpg';
import pwImage2 from '../../../img/11.jpg';
import pwImage3 from '../../../img/12.jpg';
import pwImage4 from '../../../img/10.jpg';
import pwImage5 from '../../../img/5.jpg';
import pwImage6 from '../../../img/6.jpg';

/* Styles */
import styles from './styles';

//Dimensions need to be set here don't cache them on styles (Device Orientation)
// Else set undefined to width and height in styles
// const {width,height} = Dimensions.get('window');

export default class PithreWalk extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  constructor(props){
    super(props);
    console.info("PithreWalk: constructor");
    this.pithreBorder = this.pithreBorder.bind(this);
  }

  componentWillMount(){
    console.info("PithreWalk: componentWillMount");
  }

  componentDidMount(){
    console.info("PithreWalk: componentDidMount");
  }

  componentWillReceiveProps(){
    console.info("PithreWalk: componentWillReceiveProps");
  }

  // shouldComponentUpdate(){
  //   console.info("PithreWalk: shouldComponentUpdate");
  // }

  componentWillUpdate(){
    console.info("PithreWalk: componentWillUpdate");
  }

  componentDidUpdate(){
    console.info("PithreWalk: componentDidUpdate");
  }

  componentWillUnmount(){
    console.info("PithreWalk: componentWillUnmount");
  }
  pithreBorder(color="red",width = 2){
    return {
      borderWidth: 0,
      borderColor: color,
    };
  }
  render(){
    console.info("PithreWalk: Render");
    return(
        <Swiper loop={false} style={[this.pithreBorder()]}>
          <Image source={pwImage1} style={[styles.bgContainer]}>
            <View style={[styles.container,this.pithreBorder("blue")]}>
            <View style={[styles.logo,this.pithreBorder("green")]}>
              <Text style={[styles.logoText,this.props.logoText]}>Pithre</Text>
              </View>
            <View style={[styles.body,this.pithreBorder("orange")]}>
              <Text style={styles.bodyHeading}>Layout with Flexbox</Text>
              <Text style={[styles.bodyText,this.pithreBorder("orange")]}>A component can specify the layout of its children using the
                flexbox algorithm.
              </Text>
            </View>
            <View style={[styles.footer,this.pithreBorder("blue")]}>
              <Text style={[styles.footerText,this.pithreBorder("blue")]}>Skip</Text>
              </View>
          </View>
          </Image>
          <Image source={pwImage2} style={[styles.bgContainer]}>
            <View style={[styles.container,this.pithreBorder("blue")]}>
            <View style={[styles.logo,this.pithreBorder("green")]}>
              <Text style={[styles.logoText,this.props.logoText]}>Pithre</Text>
              </View>
            <View style={[styles.body,this.pithreBorder("orange")]}>
              <Text style={styles.bodyHeading}>Layout with Flexbox</Text>
              <Text style={[styles.bodyText,this.pithreBorder("orange")]}>Flexbox is designed to provide a consistent
                layout on different screen sizes.
              </Text>
            </View>
            <View style={[styles.footer,this.pithreBorder("blue")]}>
              <Text>Skip</Text>
              </View>
          </View>
          </Image>
          <Image source={pwImage3} style={[styles.bgContainer]}>
            <View style={[styles.container,this.pithreBorder("blue")]}>
            <View style={[styles.logo,this.pithreBorder("green")]}>
              <Text style={[styles.logoText,this.props.logoText]}>Pithre</Text>
              </View>
            <View style={[styles.body,this.pithreBorder("orange")]}>
              <Text style={styles.bodyHeading}>Layout with Flexbox</Text>
              <Text style={[styles.bodyText,this.pithreBorder("orange")]}>A component can specify the layout of its children using the
                flexbox algorithm.
              </Text>
            </View>
            <View style={[styles.footer,this.pithreBorder("blue")]}>
              <Text style={[styles.footerText,this.pithreBorder("blue")]}>Skip</Text>
            </View>
          </View>
          </Image>
          <Image source={pwImage4} style={[styles.bgContainer]}>
            <View style={[styles.container,this.pithreBorder("blue")]}>
            <View style={[styles.logo,this.pithreBorder("green")]}>
              <Text style={[styles.logoText,this.props.logoText]}>Pithre</Text>
              </View>
            <View style={[styles.body,this.pithreBorder("orange")]}>
              <Text style={styles.bodyHeading}>Layout with Flexbox</Text>
              <Text style={[styles.bodyText,this.pithreBorder("orange")]}>Flexbox is designed to provide a consistent
                layout on different screen sizes.
              </Text>
            </View>
            <View style={[styles.footer,this.pithreBorder("blue")]}>
              <Text>Skip</Text>
              </View>
          </View>
          </Image>
        </Swiper>
    );
  }
}

PithreWalk.propTypes = {
  logoText: React.PropTypes.object,
};
