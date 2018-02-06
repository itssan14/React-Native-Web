import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: { fontSize: '50px' }
});

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world !</Text>
      </View>
    );
  }
}