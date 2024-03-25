import {StyleSheet} from 'react-native';
import React, {Dispatch, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import {CS} from '../utils/globalStyles';
import {mvs} from '../utils/responsive';
import {colors} from '../utils/colors';
import AppText from './AppText';
import {fontFamily} from '../utils/fonts';
import GradientBorder from './GradientBorder';

interface PROPS {
  multiple?: boolean;
  top?: number;
  items?: Array<{label: string; value: string}>;
  setItems?: Dispatch<any>;
  placeholder?: string;
  value: any;
  setValue: Dispatch<string>;
  error?: any;
  zIndex?: number;
  header?: string;
  disable?: boolean;
}

const MyDropDown = ({
  multiple = false,
  value,
  disable,
  header,
  setValue,
  placeholder,
  top = 5,
  zIndex = 5,
  setItems,
  items = CITIES,
  error,
}: PROPS) => {
  const [open, setOpen] = useState(false);
  const handleChange = (v: {value: string}) => setValue(v?.value);
  const DropDownContainer = () => {
    return (
      <DropDownPicker
        searchable={true}
        theme="DARK"
        schema={{label: 'label', value: 'value'}}
        disabled={disable}
        open={open}
        placeholder={placeholder}
        value={value}
        items={items}
        style={styles.mainContainer}
        placeholderStyle={styles.placeholder}
        dropDownContainerStyle={styles.optionsContainer}
        textStyle={styles.text}
        listMode="SCROLLVIEW"
        onSelectItem={handleChange}
        setOpen={setOpen}
        itemKey="id"
      />
    );
  };
  return (
    <View style={[CS.top18]}>
      {header && (
        <AppText
          FONT_14
          semiBold
          style={CS.bottom2}
          color={colors.black}
          children={header + '*'}
        />
      )}
      {value ? (
        <GradientBorder colors={[colors.primaryBlue, colors.primaryPink]}>
          <DropDownContainer />
        </GradientBorder>
      ) : (
        <DropDownContainer />
      )}
    </View>
  );
};

export default MyDropDown;

const styles = StyleSheet.create({
  optionsContainer: {
    backgroundColor: colors.darkGray,
    zIndex: 100,
    borderWidth: 0,
  },
  placeholder: {color: colors.WHITE, fontSize: mvs(17)},
  mainContainer: {
    height: mvs(60),
    zIndex: 100,
    borderRadius: mvs(12),
    backgroundColor: colors.darkGray,
    width: '99.5%',
    alignSelf: 'center',
    borderWidth: 0,
  },
  text: {
    color: colors.WHITE,
    fontFamily: fontFamily.MEDIUM,
  },
});

const CITIES = [
  {label: 'RYK', value: 'ryk'},
  {label: 'Lahore', value: 'lahore'},
  {label: 'Karachi', value: 'karachi'},
  {label: 'Fujariah', value: 'fujariah'},
  {label: 'Istanbul', value: 'istanbul'},
];
