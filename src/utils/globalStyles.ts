import { Platform, StyleSheet } from 'react-native';
import { colors } from './colors';
import { mvs } from './responsive';

export const Margin = {
  Margin_4: mvs(4),
  Margin_5: mvs(5),
  Margin_6: mvs(6),
  Margin_7: mvs(7),
  Margin_8: mvs(8),
  Margin_9: mvs(9),
  Margin_10: mvs(10),
  Margin_12: mvs(12),
  Margin_14: mvs(14),
  Margin_16: mvs(16),
  Margin_18: mvs(18),
  Margin_24: mvs(24),
  Margin_32: mvs(32),
  Margin_40: mvs(40),
  Margin_48: mvs(48),
  Margin_52: mvs(52),
  Margin_60: mvs(60),
  Margin_70: mvs(70)
};
export const RADIUS = {
  RADIUS_06: mvs(6),
  RADIUS_100: mvs(100),
  RADIUS_08: mvs(8),
  RADIUS_10: mvs(10),
  BOX: mvs(10),
  SMALLBOX: mvs(5),
  OVAL: mvs(24),
  OVALBOX: mvs(20),
  MAXOVALBOX: mvs(32)
};
export const CS = StyleSheet.create({
  topLevelHorizontalPadding: { flex: 1, paddingHorizontal: mvs(18) },
  GeneralWidth: {
    width: '92%',
    alignSelf: 'center'
  },
  lineSaparater: {
    borderRadius: 20,
    backgroundColor: '#3A3941',
    width: '100%',
    height: mvs(2),
    alignSelf: 'center',
    marginVertical: mvs(20)
  },
  backMaroon: { backgroundColor: colors.maroon },
  flex1: { flex: 1 },
  top2: { marginTop: mvs(2) },
  top4: { marginTop: mvs(4) },
  top6: { marginTop: mvs(6) },
  top8: { marginTop: mvs(8) },
  top10: { marginTop: mvs(10) },
  top12: { marginTop: mvs(12) },
  top14: { marginTop: mvs(14) },
  top16: { marginTop: mvs(16) },
  top18: { marginTop: mvs(18) },
  top20: { marginTop: mvs(20) },
  marginVertical2: { marginVertical: mvs(2) },
  marginVertical4: { marginVertical: mvs(4) },
  marginVertical6: { marginVertical: mvs(6) },
  marginVertical8: { marginVertical: mvs(8) },
  marginVertical10: { marginVertical: mvs(10) },
  marginVertical12: { marginVertical: mvs(12) },
  marginVertical14: { marginVertical: mvs(14) },
  marginVertical16: { marginVertical: mvs(16) },
  marginVertical18: { marginVertical: mvs(18) },
  marginVertical20: { marginVertical: mvs(20) },
  left2: { marginLeft: mvs(2) },
  left4: { marginLeft: mvs(4) },
  left6: { marginLeft: mvs(6) },
  left8: { marginLeft: mvs(8) },
  left10: { marginLeft: mvs(10) },
  left12: { marginLeft: mvs(12) },
  left14: { marginLeft: mvs(14) },
  left16: { marginLeft: mvs(16) },
  left18: { marginLeft: mvs(18) },
  left20: { marginLeft: mvs(20) },
  left22: { marginLeft: mvs(22) },
  left24: { marginLeft: mvs(24) },
  left26: { marginLeft: mvs(26) },
  left28: { marginLeft: mvs(28) },
  left30: { marginLeft: mvs(30) },
  left32: { marginLeft: mvs(32) },
  right2: { marginRight: mvs(2) },
  right4: { marginRight: mvs(4) },
  right6: { marginRight: mvs(6) },
  right8: { marginRight: mvs(8) },
  right10: { marginRight: mvs(10) },
  right12: { marginRight: mvs(12) },
  right14: { marginRight: mvs(14) },
  right16: { marginRight: mvs(16) },
  right18: { marginRight: mvs(18) },
  right20: { marginRight: mvs(20) },
  right22: { marginRight: mvs(22) },
  right24: { marginRight: mvs(24) },
  bottom2: { marginBottom: mvs(2) },
  bottom4: { marginBottom: mvs(4) },
  bottom6: { marginBottom: mvs(6) },
  bottom8: { marginBottom: mvs(8) },
  bottom10: { marginBottom: mvs(10) },
  bottom12: { marginBottom: mvs(12) },
  bottom14: { marginBottom: mvs(14) },
  bottom16: { marginBottom: mvs(16) },
  bottom18: { marginBottom: mvs(18) },
  bottom20: { marginBottom: mvs(20) },
  fontSize8: { fontSize: mvs(8) },
  fontSize10: { fontSize: mvs(10) },
  fontSize12: { fontSize: mvs(12) },
  fontSize14: { fontSize: mvs(14) },
  fontSize16: { fontSize: mvs(16) },
  fontSize18: { fontSize: mvs(18) },
  fontSize20: { fontSize: mvs(20) },
  fontSize22: { fontSize: mvs(22) },
  fontSize24: { fontSize: mvs(24) },
  fontSize26: { fontSize: mvs(26) },
  fontSize28: { fontSize: mvs(28) },
  fontSize30: { fontSize: mvs(30) },
  fontSize32: { fontSize: mvs(32) },
  fontSize34: { fontSize: mvs(34) },
  alignCenter: { alignSelf: 'center' },
  commonContainer: {
    flex: 1,
    width: '100%',
    marginTop: mvs(10)
  },
  generalPadding: { paddingHorizontal: mvs(18) },
  bottomSheet: {
    // position: "absolute",
    // bottom: 0,
    // right: 0,
    // left: 0,
    width: '100%',
    borderTopLeftRadius: mvs(40),
    borderTopRightRadius: mvs(40),
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  absolute: {
    position: 'absolute',
    overflow: 'hidden'
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: { flexDirection: 'row' },
  centerDiv: {
    flex: 1,
    alignSelf: 'center'
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowDirectionLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowDirectionWithSpaceBTW: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: mvs(180),
    alignSelf: 'center',
    marginBottom: mvs(45)
  },
  elevation1: {
    elevation: 1,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0
  },
  elevation10: {
    elevation: 10,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27
  },
  elevation2: {
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41
  },
  elevation3: {
    elevation: 3,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  elevationOnAllSides: {
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.45,
    shadowRadius: 4.62
  },
  elevation4: {
    //s  elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    opacity: 0.8,

    elevation: 6
  },
  elevationGrey: {
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1.5
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62
  },
  elevation5: {
    elevation: 5,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  primaryElevation2: {
    elevation: 10,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 10
  },
  elevation6: {
    elevation: 6,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65
  },
  elevation7: {
    elevation: 7,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65
  },
  elevation8: {
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65
  },
  elevation9: {
    elevation: 9,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46
  },
  CENTER: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListStyle: {
    marginTop: mvs(20),
    justifyContent: 'center',
    marginHorizontal: mvs(13),
    paddingBottom: mvs(100)
  }
});
export const screenOptions = {
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#ABB3E5',
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    height: mvs(65),
    borderRadius: mvs(50),
    backgroundColor: colors.WHITE,
    position: 'absolute',
    marginHorizontal: 20,
    paddingBottom: 0,
    bottom: Platform.OS == 'android' ? mvs(25) : mvs(35),
    ...CS.primaryElevation2
  }
};
