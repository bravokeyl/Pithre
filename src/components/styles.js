import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
const { width, height} = Dimensions.get("window");

export default StyleSheet.create({
  listRow: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    height: 72,
    borderBottomWidth: 1,
    // flexWrap: "wrap",
  },
  gridRow: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    height: 72,
    elevation: 2,
    width: width/2,
  },
  listCol: {
    justifyContent: "center",
  }
});
