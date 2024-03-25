import { Platform } from 'react-native';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';

export enum UserRole {
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
  RECRUITING = 'RECRUITING'
}

export enum keyPointType {
  Number = 'Number',
  Binary = 'Binary',
  Currency = 'Currency',
  Percentage = 'Percentage'
}

export enum keyPointTypeSigns {
  Number = '',
  Binary = '',
  Currency = '$',
  Percentage = '%'
}

export enum keyPointTypePlaceholder {
  Number = '0',
  Binary = '0',
  Currency = '$0.00',
  Percentage = '0.00%'
}

// const typeData = [{
//   label: "Number",
//   value: "Number",

// },
// {
//   label: "Binary",
//   value: "Binary",
// },
// {
//   label: "Currency",
//   value: "Currency",
// },
// {
//   label: "Percentage",
//   value: "Percentage",
// },

// ]
