import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik } from "formik";
export default function App() {
  return (
    
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleBlur, handleSubmit, handleChange }) => (
          <View style={styles.container}>
            <Text>This is a Formik Form</Text>
            <TextInput
              placeholder="Username"
              autoCompleteType="username"
              values={values.username}
              onChangeText={handleChange("username")}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              values={values.password}
              onChangeText={handleChange("password")}
              style={styles.textInput}
              autoCompleteType="password"
            />
            <Button title="submit" color="maroon" onPress={handleSubmit} />
          </View>
        )  }
      </Formik>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    margin:10,
    padding:5,
    borderBottomColor:"black",
    borderBottomWidth: 1,
    borderRadius: 6,
    height: 40,
    width:100,
  },
});
