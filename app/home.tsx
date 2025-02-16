import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>FAFSA Friends Home Page</Text>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => router.push("/FinAI")}>
            <Text style={styles.tabText}>FinAI</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/history")}>
            <Text style={styles.tabText}>History</Text>
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
        {/* Green container: 50% width & height of the page */}
        <View style={styles.greenContainer}>
          {/* Inner rectangle: fixed size with #B1D08D background */}
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>
              Simplify your FAFSA & Financial Forms with FAFSA Friends!
            </Text>
            <Text style={styles.subtext}>
              Tired of struggling with complex financial paperwork? FAFSA Friends helps you
              breakdown, validate, and submit forms effortlessly, saving you time and stress.
            </Text>
            <Text style={styles.featuresLabel}>Features</Text>
            <View style={styles.featuresContainer}>
              <View style={styles.featureBox}>
                <Text style={styles.featureText}>AI Financial Assistant</Text>
              </View>
              <View style={styles.featureBox}>
                <Text style={styles.featureText}>Tax Form Breakdown</Text>
              </View>
              <View style={styles.featureBox}>
                <Text style={styles.featureText}>Secure Document Upload</Text>
              </View>
            </View>
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
  // Positioned to the bottom-right of the header
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
  // The green container takes up 50% of the width and height of the screen
  greenContainer: {
    backgroundColor: "#CDE7B0",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  // The fixed inner rectangle with the promotional content
  innerContainer: {
    width: 842,
    height: 506,
    backgroundColor: "#B1D08D",
    padding: 20,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },
  featuresLabel: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },
  featuresContainer: {
    // Stacks the feature boxes vertically
  },
  featureBox: {
    width: 384,
    height: 58,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30, // 30px spacing between boxes; the last one can also have marginBottom if desired
  },
  featureText: {
    fontSize: 20,
    color: "black",
    // The text dimensions are roughly as specified (width: 338, height: 26)
    width: 338,
    textAlign: "center",
  },
});

