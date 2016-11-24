import React from 'react';
import {StyleSheet} from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  primaryText: {
    fontSize: colors.primaryTextSize,
    fontWeight: colors.regularWeight,
    color: colors.primaryTextColor,
  },
  primaryTextCondensed: {
    fontSize: 12,
    fontWeight: colors.regularWeight,
    color: colors.primaryTextColor,
    flexWrap: "wrap",
  },
  secondaryText: {
    fontSize: colors.secondaryTextSize,
    fontWeight: colors.regularWeight,
    color: colors.secondaryTextColor,
  },

  twoLineListTextOnly: {

  },
  blackDivider: {
    borderColor: colors.blackDividerColor,
  },
  listLeftIcon: {
    width:56,
    paddingLeft: 16,
  },
  gridLeftIcon: {
    width:38,
    alignItems: "center",
    // paddingLeft: 12,
  },
  listRightIcon: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  gridRightIcon: {
    // paddingLeft: 8,
    // paddingRight: 0,
    width: 38,
    alignItems: "center",
  },
  twoLineListIconText: {

  },
  twoLineListAvatarText: {

  },
  twoLineListAvatarTextIcon: {

  },
});
