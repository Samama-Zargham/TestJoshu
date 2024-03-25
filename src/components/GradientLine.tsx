import {StyleSheet, ViewStyle, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppText from './AppText';
import {CS} from '../utils/globalStyles';
import {colors} from '../utils/colors';

interface GradientLineProps {
  percentage?: any;
  //   colors?: Array<string>;
  containerStyle?: ViewStyle;
  width?: any;
  gradientWidth?: any;
}

export const GradientLine: React.FC<GradientLineProps> = React.memo(
  ({percentage, containerStyle, width, gradientWidth}: any) => {
    let percent = percentage > 100 ? 100 : percentage == 'NaN' ? 0 : percentage;
    return (
      <View style={[styles.row, containerStyle, {width: width ?? '87%'}]}>
        <View style={[styles.gradientView, {width: gradientWidth ?? '67%'}]}>
          <LinearGradient
            style={{
              height: 7,
              width: `${(percentage < 0.5 ? 0.5 : percentage) || 0}%`,
              borderRadius: 10,
              zIndex: 100,
            }}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            colors={[colors.primaryBlue, colors.primaryPink]}
          />
          <View style={styles.grayPerfomance} />
        </View>
        <AppText
          FONT_12
          children={`${parseFloat(percent).toFixed(0) + ' ' || '0'}%`}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  gradientView: {
    ...CS.rowDirection,
  },
  row: {
    ...CS.rowDirectionWithSpaceBTW,
    zIndex: 11,
  },
  grayPerfomance: {
    height: 7,
    width: `100%`,
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 10,
    position: 'absolute',
  },
});
