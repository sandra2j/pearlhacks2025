import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const router = useRouter();

  // Open the file explorer
  const handleFileUpload = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log("File selected:", result);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>FAFSA Friends</Text>
        <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => router.push("/FinAI")}>
            <Text style={styles.tabText}>FinAI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/history")}>
            <Text style={styles.tabText}>history</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/upload")}>
            <Text style={styles.tabText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
            <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Green rectangle (50% width & height of the page) */}
        <View style={styles.outerContainer}>
          {/* White fixed-size rectangle with file upload UI */}
          <View style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.uploadIconContainer}
              onPress={handleFileUpload}
            >
              <Ionicons name="cloud-upload-outline" size={64} color="black" />
            </TouchableOpacity>
            <Text style={styles.uploadText}>
              Browse for file to upload here
            </Text>
          </View>
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
    paddingLeft: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
  },
  // Positioned in the bottom-right of the header (to the right and below the header text)
  tabsContainer: {
    position: "absolute",
    bottom: 10,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  tabText: {
    fontSize: 25,
    color: "black",
    marginLeft: 15,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // The green container: takes up 50% of the width and height of the page
  outerContainer: {
    backgroundColor: "#CDE7B0",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  // The white file upload rectangle (fixed size)
  innerContainer: {
    width: 727,
    height: 374,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadIconContainer: {
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 25,
    color: "black",
    width: 244,
    height: 25,
    textAlign: "center",
  },
});
