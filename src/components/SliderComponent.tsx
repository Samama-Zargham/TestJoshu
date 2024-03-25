import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import Slider from 'react-native-slider';
import {mvs} from '../utils/responsive';
import AppText from './AppText';

const SliderComponent = () => {
  const [value, setValue] = useState(0);

  const renderCustomTrack = () => {
    var gradientWidth = (value / 1000) * 100 + '%';
    return (
      <View style={styles.track}>
        <LinearGradient
          colors={[colors.primaryBlue, colors.primaryPink]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.gradient, {width: gradientWidth}]}
        />
        <View style={[styles.grayTrack, {width: '100%'}]} />
      </View>
    );
  };

  return (
    <View style={styles.sliderLayout}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: mvs(14),
        }}>
        <AppText style={styles.width10} children={value} />
        <View style={styles.centered}>
          {renderCustomTrack()}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000}
            step={1}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            // thumbImage={TEST_IMAGES.thumb}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: colors.primaryBlue,
              borderWidth: 2,
              borderColor: colors.primaryPink,
            }}
            sliderValue={value}
            value={value}
            onValueChange={newValue => setValue(newValue)}
          />
        </View>
        <AppText style={styles.width10Right} children={1000} />
      </View>
    </View>
  );
};

export default SliderComponent;

const styles = StyleSheet.create({
  width10Right: {width: '10%'},
  width10: {width: '10%'},
  sliderLayout: {
    width: '100%',
    height: mvs(55),
    backgroundColor: colors.black,
    borderRadius: mvs(12),
    borderColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: mvs(10),
  },
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: mvs(6),
    borderRadius: mvs(12),
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    borderRadius: mvs(10),
    zIndex: 1000,
  },
  grayTrack: {
    height: '100%',
    backgroundColor: colors.darkGray,
    borderRadius: mvs(10),
  },
  slider: {
    width: '85%',
    position: 'absolute',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: mvs(14),
  },
});
