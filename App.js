import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

import { BarChart } from 'react-native-svg-charts'

export default function App() {
  const [rotation, setRotation] = useState({});

  useEffect(() => {
    DeviceMotion.addListener(deviceMotionData => {
      setRotation(deviceMotionData.rotation);
      // alpha is for rotation around Z axis, beta for X axis rotation and gamma for Y axis rotation
    });
  }, []);

  useEffect(() => {
    return () => {
      DeviceMotion.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.sensor}>
      <BarChart
        style={{ flex: 1, marginLeft: 8 }}
        data={[rotation.gamma, rotation.alpha, rotation.beta]}
        horizontal={true}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)', }}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        gridMin={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 45,
    paddingHorizontal: 10,
    flexDirection: 'row', 
    height: 200, 
    paddingVertical: 16
  },
  text: {
    textAlign: 'center',
  },
});
