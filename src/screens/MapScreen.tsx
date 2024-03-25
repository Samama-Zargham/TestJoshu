import {
  I18nManager,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, MAP_TYPES, Marker} from 'react-native-maps';
import i18n from '../utils/i18n';
import i18next from 'i18next';
import {GOOGLE_MAPS_APIKEY, setAsyncStorageValue} from '../utils/helpers';
import RNRestart from 'react-native-restart';
import {useSSR, useTranslation} from 'react-i18next';
import MapViewDirections from 'react-native-maps-directions';
import {useTheme} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = () => {
  const {t} = useTranslation();
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 33.6844,
    longitude: 73.0479,
  });
  const colors = useTheme().colors;
  const [coordinates] = useState([
    {
      latitude: 33.6844,
      longitude: 73.0479,
    },
    {
      latitude: 24.8607,
      longitude: 67.0011,
    },
  ]);
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        alert(['current Location ', longitude, latitude]);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, distanceFilter: 10}, // Update every 10 meters
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);
  const changeLang = async () => {
    I18nManager.forceRTL(i18n.language !== 'ar');
    await setAsyncStorageValue('lang', i18next.language === 'ar' ? 'en' : 'ar');
    RNRestart.Restart();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.textView, {backgroundColor: colors.background}]}>
        <Text style={[styles.txt, {color: colors.text}]}>
          {t('Input Field is empty')}
        </Text>
        <TouchableOpacity onPress={changeLang}>
          <Text style={[styles.txt, {color: colors.text}]}>
            {t(
              i18next.language === 'ar'
                ? 'Click for English'
                : 'Click for Arabic',
            )}
          </Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
      <MapView
        zoomEnabled
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        mapType={MAP_TYPES.HYBRID}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 10,
          longitudeDelta: 20,
        }}>
        <Marker coordinate={{...currentLocation}} />
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={7}
          strokeColor="blue"
          optimizeWaypoints={true}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  txt: {
    color: 'red',
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'left',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  textView: {
    position: 'absolute',
    zIndex: 20,
    top: '10%',
    paddingHorizontal: 20,
  },
});
