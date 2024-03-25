import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseScreen from '../components/BaseScreen';
import AppText from '../components/AppText';

const Splash = () => {
  return (
    <BaseScreen>
      <View style={styles.layout}>
        <AppText children={'Test Project'} FONT_36 />
      </View>
    </BaseScreen>
  );
};

export default Splash;

const styles = StyleSheet.create({
  layout: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
