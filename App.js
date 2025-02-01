import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HelloTouchableHighlight from "../rnd-notes/ReactNativeTouchableHighlight/HelloTouchableHighlight";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HelloTouchableHighlight />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
