import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageComponent, View, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginButton from "./app/components/LoginButton";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.outerLayer}>
      <ListingScreen />
    </GestureHandlerRootView>
  );
  // <GestureHandlerRootView>{<MessagesScreen />}</GestureHandlerRootView>;
}
const styles = StyleSheet.create({
  outerLayer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
  },
});
