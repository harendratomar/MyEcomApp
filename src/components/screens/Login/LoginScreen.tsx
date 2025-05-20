import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { loginUser } from "../../../services/api";
import { useTheme } from "@react-navigation/native";

const LoginScreen = ({ navigation }: any) => {
  const { colors } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields.");

      return;
    }

    setLoading(true);

    try {
      const data = await loginUser(username.trim(), password.trim());
      console.log("Login Success:", data);
      Alert.alert("Success", "Logged in successfully!");
      setLoading(false);

      navigation.navigate("MainTabs", { user: data });
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert(
        "Error",
        error.message || "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Login</Text>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.border },
        ]}
        placeholder="Username"
        placeholderTextColor="gray"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.border },
        ]}
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title={loading ? "Logging in..." : "Login"}
        onPress={handleLogin}
      />
      {/* <Text
        style={styles.registerText}
        onPress={() => navigation.navigate("Register")}
      >
        Don't have an account? Register here.
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
