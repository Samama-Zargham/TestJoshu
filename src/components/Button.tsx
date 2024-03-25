import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AnySvg from './AnySvg';
import {colors} from '../utils/colors';
import {mvs} from '../utils/responsive';

const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonLayout} activeOpacity={0.9}>
      <AnySvg width={44} height={24} disabled name="next" />
      <AnySvg size={26} disabled name="arrowRight" />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonLayout: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: mvs(20),
    alignItems: 'center',
    height: mvs(52),
    marginTop: mvs(26),
  },
});
