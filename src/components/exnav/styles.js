import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 168.75,
    width: null,
    backgroundColor: "#444252",
    resizeMode: 'cover',
    paddingLeft: 16,
    justifyContent: "space-around",
  },
  headerAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  headerSubtitle:{
    height: 48,
    justifyContent: "space-between",
  },
  headerName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ffffff",
  },
  headerEmail: {
    fontSize: 14,
    fontWeight: 'normal',
    color: "#ffffff",
  },
  headerListItem: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.87)',
    fontWeight: '500',
    marginLeft: 0,
    marginRight: 16,
  },
  icon: {
    color: 'rgba(0,0,0,0.54)',
    marginLeft: 0,
    marginRight: 16,
    width: 40,
  },
  selectedText: {
    color: '#FF5722',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },

  //Sliding Tabs
  tabLabel: {
    margin: 8,
    fontSize: 13,
    color: '#fff',
  },

  tabIndicator: {
    backgroundColor: '#fff',
  },

});
