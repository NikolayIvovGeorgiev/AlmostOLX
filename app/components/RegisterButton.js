import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

function RegisterButton(props) {
  return (
    <View style={styles.registerButton}>
      <Text style={styles.buttonText}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 40,
    borderRadius: 30,
    bottom: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default RegisterButton;
