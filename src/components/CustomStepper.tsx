import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/colors';
import {mvs} from '../utils/responsive';
import AnySvg from './AnySvg';

const CustomStepper = ({numberOfSteps, currentStep}: any) => {
  const renderSteps = () => {
    return Array.from({length: 6}, (_, index) => {
      const isActiveStep = index === currentStep;
      const isCompletedStep = index < currentStep;
      const gradientColors = isActiveStep
        ? [colors.primaryGreen, colors.primaryBlue]
        : isCompletedStep
        ? [colors.primaryGreen, colors.primaryBlue]
        : [colors.darkGray, colors.darkGray];
      return (
        <View key={index} style={styles.stepContainer}>
          <LinearGradient
            colors={gradientColors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[styles.step]}>
            <AnySvg name="user" />
          </LinearGradient>
          {index < numberOfSteps - 1 && (
            <LinearGradient
              colors={
                index < currentStep
                  ? [colors.primaryBlue, colors.primaryGreen]
                  : [colors.darkGray, colors.darkGray]
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.line}
            />
          )}
        </View>
      );
    });
  };

  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        {renderSteps()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: mvs(20),
    paddingHorizontal: mvs(18),
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  step: {
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(100),
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  activeStep: {
    borderWidth: 2,
    borderColor: 'white',
  },
  line: {
    width: mvs(32),
    height: mvs(6),
    backgroundColor: colors.darkGray,
  },
});

export default CustomStepper;
