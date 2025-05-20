import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ThemeSwitcher from "../ThemeProvider";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import { useNavigation } from "@react-navigation/native";

function SettingScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <View>
      <ThemeSwitcher />
      <TouchableOpacity
        style={[
          styles.dynamicButton,
          theme === "dark" ? styles.darkButton : styles.lightButton,
        ]}
        onPress={() => navigation.navigate("ProofOfDelivery")}
      >
        <Text
          style={[
            styles.dynamicButtonText,
            theme === "dark" && styles.darkButtonText,
          ]}
        >
          {t("Proof of Delivery")}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  dynamicButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  darkButton: { backgroundColor: "#444" },
  lightButton: { backgroundColor: "#007BFF" },
  dynamicButtonText: { fontSize: 16 },
  darkButtonText: { color: "#fff" },
});

export default SettingScreen;
