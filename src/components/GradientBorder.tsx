import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {mvs} from '../utils/responsive';

interface Props {
  children: ReactNode;
  colors: any;
  style?: ViewStyle;
}

const GradientBorder = ({children, colors, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  gradient: {
    position: 'absolute',
    borderRadius: mvs(12),
    left: 0,
    top: -1,
    bottom: 0,
    height: mvs(62),
    width: '100%',
  },
});

export default GradientBorder;
