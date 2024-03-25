import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CS, RADIUS} from '../utils/globalStyles';
import AnySvg from './AnySvg';
import {colors} from '../utils/colors';
import {mvs} from '../utils/responsive';
import AppText from './AppText';

const Header = () => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity activeOpacity={0.8} style={styles.goBackIcon}>
        <AnySvg disabled name="backArrow" />
      </TouchableOpacity>
      <View>
        <AppText children={'Media management'} FONT_16 semiBold />
        <AppText
          Medium
          style={CS.alignCenter}
          color={colors.grayTextColor}
          children={'Draft campaign'}
        />
      </View>
      <AnySvg disabled name="profile" size={56} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  layout: {
    ...CS.rowDirectionWithSpaceBTW,
    marginVertical: mvs(26),
    paddingHorizontal: mvs(14),
  },
  goBackIcon: {
    backgroundColor: colors.darkGray,
    height: mvs(56),
    width: mvs(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RADIUS.RADIUS_100,
  },
});
