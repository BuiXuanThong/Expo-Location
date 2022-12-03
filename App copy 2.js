import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAP_API = "AIzaSyAwYk7CWKB_DWixQIzlkkIN6a5_H5xlNSQ";

export default function App() {
  const pickUpLocation = {
    latitude: 10.87839,
    longitude: 106.80632,
  };

  const dropOffLocation = {
    latitude: 10.88216,
    longitude: 106.78253,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.87839,
          longitude: 106.80632,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        <Marker
          coordinate={pickUpLocation}
          title="My Marker"
          pinColor='purple'
        />
        <Marker
          coordinate={dropOffLocation}
          title="My Marker 2"
          pinColor='red'
        />
        <MapViewDirections
          origin={pickUpLocation}
          destination={dropOffLocation}
          apikey={GOOGLE_MAP_API}
        />
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});