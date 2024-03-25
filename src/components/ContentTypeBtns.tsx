import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {colors} from '../utils/colors';
import AppText from './AppText';
import {mvs} from '../utils/responsive';

interface ContentTypeBtnsProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
const ContentTypeBtns = ({value, setValue}: ContentTypeBtnsProps) => {
  return (
    <View style={styles.wrap}>
      {['Fun', 'News', 'Education', 'Investment', 'Sports', 'Facts'].map(
        (item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setValue(item)}
              key={index}
              style={[
                styles.typeBtn,
                value == item && {
                  backgroundColor: colors.primaryBlue,
                  borderColor: colors.primaryBlue,
                },
              ]}
              activeOpacity={0.9}>
              <AppText children={item} />
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

export default ContentTypeBtns;

const styles = StyleSheet.create({
  typeBtn: {
    borderWidth: 1,
    borderColor: colors.grayTextColor,
    paddingVertical: mvs(14),
    paddingHorizontal: mvs(28),
    borderRadius: mvs(30),
    marginBottom: mvs(16),
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: mvs(24),
  },
});
