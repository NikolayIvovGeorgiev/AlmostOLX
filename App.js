import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginButton from "./app/components/LoginButton";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for sale"
        subtitle="100$"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );

  // <WelcomeScreen />;

  // <LoginButton />;
  // <ViewImageScreen />;
}
