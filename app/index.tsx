import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Index() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>FAFSA Friends</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.formContainer}>
          {/* Login Title */}
          <Text style={styles.loginTitle}>Log In</Text>
          
          {/* Username/Email Field */}
          <Text style={styles.label}>Username/Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username or email"
            placeholderTextColor="gray"
          />

          {/* Password Field */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="gray"
            secureTextEntry
          />

          {/* Log In Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <Text style={styles.signupText}>
            Don’t have an account?{" "}
            <Text style={styles.signupLink} onPress={handleSignup}>
              Sign up here.
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
    width: windowWidth * 0.5,
    height: windowHeight * 0.5,
    padding: 20,
    borderRadius: 8,
    justifyContent: "flex-start",
  },
  loginTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
  },
  label: {
    fontSize: 20,
    color: "black",
    marginTop: 15,
  },
  input: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#B1D08D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 20,
    alignSelf: "center",
  },
  loginButtonText: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  signupText: {
    fontSize: 20,
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
  signupLink: {
    textDecorationLine: "underline",
  },
});
