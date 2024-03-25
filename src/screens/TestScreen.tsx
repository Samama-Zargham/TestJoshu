import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import BaseScreen from '../components/BaseScreen';
import AppText from '../components/AppText';
import {CS} from '../utils/globalStyles';
import {colors} from '../utils/colors';
import ContentTypeBtns from '../components/ContentTypeBtns';
import MyDropDown from '../components/MyDropDown';
import {contentTpes} from '../utils/staticData';
import {mvs} from '../utils/responsive';
import SliderComponent from '../components/SliderComponent';
import MarginView from '../components/MarginView';
import Button from '../components/Button';
import CustomStepper from '../components/CustomStepper';

const TestScreen = () => {
  const [selectedType, setselectedType] = useState('Fun');
  const [value, setvalue] = useState('');

  const handleSetType = (v: string) => {
    setselectedType(v);
    setvalue('');
  };
  return (
    <BaseScreen>
      <Header />
      <CustomStepper numberOfSteps={6} currentStep={1} />
      <BaseScreen paddingHorizontal={18} scrollable>
        <AppText children={'Content type'} FONT_24 Medium />
        <AppText
          children={'Choose a content type that best fits your needs.'}
          color={colors.grayTextColor}
        />
        <View style={[CS.lineSaparater]} />
        <AppText children={'What type of content are you creating?'} Medium />
        <ContentTypeBtns value={selectedType} setValue={handleSetType} />
        <AppText
          children={`Which type of '${selectedType}' content are you creating?`}
          Medium
        />
        <View style={{zIndex: 30000}}>
          <MyDropDown
            items={contentTpes[selectedType]}
            value={value}
            setValue={setvalue}
          />
        </View>
        <MarginView top10 />
        <AppText
          style={CS.marginVertical20}
          children={'Set the number of words for output text.'}
          Medium
        />
        <SliderComponent />
        <Button />
      </BaseScreen>
    </BaseScreen>
  );
};

export default TestScreen;
