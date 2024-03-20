import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import React, { useEffect } from "react";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("дай позволение бе");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <GestureHandlerRootView style={styles.outerLayer}>
      <Screen></Screen>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  outerLayer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
  },
});
