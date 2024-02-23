import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginButton from "./app/components/LoginButton";
import AppButton from "./app/components/AppButton";

export default function App() {
  return <WelcomeScreen />;

  // <LoginButton />;
  // <ViewImageScreen />;
}
