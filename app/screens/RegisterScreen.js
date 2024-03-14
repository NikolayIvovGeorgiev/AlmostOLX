import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .email("Invalid email")
    .label("Email"),
  password: Yup.string().required("Required").min(4).label("Password"),
  passwordConfirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), undefined], "Passwords must match"),
});

function LoginScreen(props) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
          name: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon={"baby-face"}
          placeholder="Name"
        />
        <AppFormField
          name="face"
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <AppFormField
          name="passwordConfirmation"
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          placeholder="password Confirmation"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
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
export default LoginScreen;
