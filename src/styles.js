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
  listRightIcon: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  twoLineListIconText: {

  },
  twoLineListAvatarText: {

  },
  twoLineListAvatarTextIcon: {

  },
});
