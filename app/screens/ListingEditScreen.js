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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
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
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder="Category"
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
