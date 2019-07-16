import React from 'react';
import {
  AppRegistry, StyleSheet, Text, View,
} from 'react-360';

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

export const joeymurphyphotography360 = () => (
  // <View style={styles.panel}>
  //   <View style={styles.greetingBox}>
  //     <Text style={styles.greeting} />
  //   </View>
  // </View>
);
export default joeymurphyphotography360;

AppRegistry.registerComponent('joeymurphyphotography360', () => joeymurphyphotography360);
