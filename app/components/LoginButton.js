import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";

function LoginButton(props) {
  return (
    <View style={styles.loginButton}>
      <Text style={styles.buttonText}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 40,
    borderRadius: 30,
    bottom: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default LoginButton;
