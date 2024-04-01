import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import React, { useEffect, useState } from "react";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import FormImagePicker from "./app/components/forms/FormImagePicker";

export default function App() {
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  return (
    <GestureHandlerRootView style={styles.outerLayer}>
      <Screen>
        <ListingEditScreen />
        {/* <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        /> */}
      </Screen>
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
