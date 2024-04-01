import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "chair-rolling",
  },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "gold", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "green", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "cadetblue",
    icon: "shoe-formal",
  },
  { label: "Sports", value: 6, backgroundColor: "blue", icon: "volleyball" },
  {
    label: "Movie & Music",
    value: 7,
    backgroundColor: "cornflowerblue",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "blueviolet",
    icon: "book-open-variant",
  },
  { label: "Other", value: 9, backgroundColor: "gray", icon: "mirror" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "null",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiLine
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default ListingEditScreen;
