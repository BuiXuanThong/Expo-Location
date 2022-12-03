import React, { useState, useEffect } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
// import MapViewDirections from 'react-native-maps-directions';

// const GOOGLE_MAP_API = "AIzaSyAwYk7CWKB_DWixQIzlkkIN6a5_H5xlNSQ";

export default function App() {
  const coordinates = [
    { latitude: 10.77309, longitude: 106.69835 },
    { latitude: 10.77281, longitude: 106.69853 },
    { latitude: 10.7731, longitude: 106.69882 },
    { latitude: 10.77371, longitude: 106.69944 },
    { latitude: 10.7734, longitude: 106.69978 },
    { latitude: 10.7736, longitude: 106.7 },
    { latitude: 10.77082, longitude: 106.70122 },
    { latitude: 10.77056, longitude: 106.70618 },
    { latitude: 10.76835, longitude: 106.7056 },
    { latitude: 10.76246, longitude: 106.70838 },
    { latitude: 10.75702, longitude: 106.71797 },
    { latitude: 10.75184, longitude: 106.72482 },
    { latitude: 10.75248, longitude: 106.72661 },
    { latitude: 10.75263, longitude: 106.728 },
    { latitude: 10.75238, longitude: 106.7284 },
    { latitude: 10.74475, longitude: 106.72915 },
  ];


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        <Polyline
          coordinates={coordinates}
          // red
          strokeColor="#f00"
          strokeWidth={6}
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