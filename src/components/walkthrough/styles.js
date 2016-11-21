import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 40,
    // backgroundColor: 'rgba(0,0,0,0.4)',
  },
  logo: {

  },
  logoText: {
    fontSize: 30,
    color: "#ffffff",
  },
  body: {
  },
  bodyHeading: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  bodyText: {
    color: "#ffffff",
    textAlign: 'center',
  },
  footer: {

  },
  footerText: {
    color: "#ffffff",
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
});
