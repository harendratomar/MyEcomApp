import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen"; // Ensure correct import

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      if (SplashScreen && SplashScreen.hide) {
        SplashScreen.hide();
      }
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transcurator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: { fontSize: 30, fontWeight: "bold", color: "#FFFFFF" },
});

export default Splash;
