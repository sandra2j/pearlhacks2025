import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = () => {
    if (password !== rePassword) {
      setErrorMessage("Password and Re-enter Password must match");
    } else {
      setErrorMessage("");
      router.push("/");
    }
  };

  const handleLoginRedirect = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FAFSA Friends</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.label}>Username/Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username or email"
            placeholderTextColor="gray"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="gray"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.label}>Re-enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password"
            placeholderTextColor="gray"
            secureTextEntry
            value={rePassword}
            onChangeText={setRePassword}
          />

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <Text style={styles.loginRedirect}>
            Have an account?{" "}
            <Text style={styles.loginLink} onPress={handleLoginRedirect}>
              Log in here.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 124,
    backgroundColor: "#B1D08D",
    justifyContent: "center",
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#CDE7B0",
    padding: 20,
    borderRadius: 8,
    minWidth: "50%",
    minHeight: "50%",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: "black",
    marginTop: 10,
  },
  input: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
  },
  signupButton: {
    backgroundColor: "#B1D08D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 20,
    alignSelf: "center",
  },
  signupButtonText: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },
  loginRedirect: {
    fontSize: 20,
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
  loginLink: {
    textDecorationLine: "underline",
  },
});
