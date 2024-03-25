/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {Platform, View, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {mvs} from '../utils/responsive';
import {colors} from '../utils/colors';

interface Props {
  children: ReactNode;
  isPaddingHorizontal?: boolean;
  scrollable?: boolean;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  horizontal?: boolean;
  bottomZero?: boolean;
  backgroundColor?: string;
  paddingBottom?: number;
  paddingTop?: number;
  padding?: number;
  paddingHorizontal?: number;
}

const BaseScreen: React.FC<Props> = ({
  children,
  scrollable = false,
  containerStyle,
  horizontal = false,
  backgroundColor,
  paddingBottom = 0,
  paddingTop = 0,
  padding = 0,
  paddingHorizontal = 0,
  bottomZero,
}) => {
  const insets = useSafeAreaInsets();
  if (scrollable) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor
            ? backgroundColor
            : colors?.background,
        }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={horizontal}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          // enableOnAndroid={true}
          // extraHeight={150} // make some height so the keyboard wont cover other component
          // extraScrollHeight={200} // (when scroll)to have extra height between keyboard and text input
          contentContainerStyle={{
            flexGrow: 1,
            padding: mvs(padding),
            paddingBottom: mvs(paddingBottom),
            paddingTop: mvs(paddingTop),
            paddingHorizontal: mvs(paddingHorizontal),
            ...containerStyle,
          }}
          //enableOnAndroid={true}
        >
          {children}
        </KeyboardAwareScrollView>
      </View>
    );
  } else
    return (
      <View
        style={[
          {
            flex: 1,
            backgroundColor: backgroundColor
              ? backgroundColor
              : colors?.background,
          },
          {
            paddingTop: insets.top,
            paddingBottom:
              bottomZero || Platform.OS === 'ios' ? 0 : insets.bottom,
          },
          containerStyle,
        ]}>
        {children}
      </View>
    );
};
export default BaseScreen;
