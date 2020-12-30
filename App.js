import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    stretch: {
      width: 400,
      height: 400,
      position: 'relative'
    },
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./myImage.jpeg')}
      />
      <Text>       Krunal Mistry</Text>
      <Text>       West haven, CT, USA</Text>
      <Text>       Masters in Computer Science</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
