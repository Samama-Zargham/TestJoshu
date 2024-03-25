import {View} from 'react-native';
import React from 'react';
import {CS} from '../utils/globalStyles';

type marginProps = {
  //Bottom
  bottom2?: boolean;
  bottom4?: boolean;
  bottom6?: boolean;
  bottom8?: boolean;
  bottom10?: boolean;
  bottom12?: boolean;
  bottom14?: boolean;
  bottom16?: boolean;
  bottom18?: boolean;
  bottom20?: boolean;
  //Top
  top2?: boolean;
  top4?: boolean;
  top6?: boolean;
  top8?: boolean;
  top10?: boolean;
  top12?: boolean;
  top14?: boolean;
  top16?: boolean;
  top18?: boolean;
  top20?: boolean;
  generalPadding?: boolean;
};
type UpdateKeys<T> = {
  [K in keyof T as Uncapitalize<string & K>]: boolean;
};
type UpdatedKeys = UpdateKeys<marginProps>;

const MarginView: React.FC<UpdatedKeys> = props => {
  const margin = Object.keys(props)[0];
  if (props?.generalPadding) {
    return <View style={CS.generalPadding} />;
  } else return <View style={CS[margin || 'top10']} />;
};

export default MarginView;
