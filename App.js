import { StatusBar } from "expo-status-bar";
import React ,{useState,useRef} from "react";
import { StyleSheet, Text, View, Button, TextInput,FlatList } from "react-native";
import { Formik } from "formik";


export default function App() {
const [data,setData]=useState()
const usernameRef=useRef()
const passwordRef=useRef()

  return (
    <View style={styles.container}>
    
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          setData({...data,values})
          console.log(values)
          usernameRef.current.clear()
          passwordRef.current.clear()
          values.username=""
          values.password=""
        }}
      >
        {({ values, handleBlur, handleSubmit, handleChange }) => (
          <View>
            <Text style={styles.heading}>This is a Formik Form</Text>
            <TextInput
            ref={usernameRef}
              placeholder="Username"
              autoCompleteType="username"
              values={values.username}
              initialValues={values.username}
              onChangeText={handleChange("username")}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              ref={passwordRef}
              values={values.password}
              initialValues={values.username}
              onChangeText={handleChange("password")}
              style={styles.textInput}
              secureTextEntry={true}
              autoCompleteType="password"
            />
            <Button title="submit" color="maroon" onPress={handleSubmit} />
          </View>
        )  }
      </Formik>
     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
    padding:20,
    paddingBottom:20
  },
  centeredContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  innerContainer:{
    flex:1
  },
  heading:{
    fontSize:24,
    marginBottom:12
  },
  textInput: {
    margin:10,
    padding:5,
    borderBottomColor:"black",
    borderBottomWidth: 1,
    borderRadius: 6,
    height: 40,
    width:'100%',
  },
  flatList:{
    flex:1
  }
});
