import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,
  Image, Button, Alert,
} from 'react-native';
import Parse from 'react-native';
export default function App({ navigation })  {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const doSignUp = async function () {
    const usernameValue = username;
    const passwordValue = password;

    return await Parse.User.SignUp(usernameValue, passwordValue)
    .then((createUser) => {
      Alert.alert(
        "success!",
        `user ${createUser.get("username")} was successfully Created!`
      );
      return true;
    })
    .catch((error) => {
      Alert.alert("Error!", error.message);
      return false;
    });
  }
  return (
    <View style={styles.Container}>

    <StatusBar style="auto" />
    <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={username}
          placeholder={"UserName"}
          onChangeText={(username) => setUsername(username)}
          autoCapitalize={"none"}
        />
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgot_button}>Login Here....?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
          {/* // title={"Sign Up"} onPress={() => {}}  */}
      </TouchableOpacity>

    </View>
 
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#7DA",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#7DA24A",
  },
});

