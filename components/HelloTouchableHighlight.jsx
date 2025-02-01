import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight
} from "react-native";

export default function HelloTouchableHighlight() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>!Hola React Native, TouchableHighlight.</Text>

      <TouchableHighlight
        onPress={() => {
          console.log("!TouchableHighlight pressed.");
        }}
      >
        <Image
          source={require("../assets/favicon.png")}
          style={styles.image}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 20 },
  image: { height: 100, width: 100, borderRadius: 10 },
});
