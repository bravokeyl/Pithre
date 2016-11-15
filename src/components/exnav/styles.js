import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    height: 168.75,
    width: null,
    backgroundColor: "#444252"
    // resizeMode: 'cover',
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
    color: '#0084FF',
  },
  selectedItemStyle: {
    backgroundColor: "#E8E8E8",
  },
});
