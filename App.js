import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  View,
} from "react-native";
import { useWindowDimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  // const orientation = () => {
  //   let orientation;
  //   const { height, width } = useWindowDimensions();
  //   if (height > width) {
  //     orientation = "portrait";
  //     return orientation;
  //   } else if (width > height) {
  //     orientation = "landscape";
  //     return orientation;
  //   }
  // };
  // orientation();
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          // width: orientation() === "landscape" ? "100%" : "30%",
          height: orientation === "landscape" ? "110%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? 20 : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
