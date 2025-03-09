import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = ({ route }: any) => {
  const { user } = route.params || {};
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
      {user ? (
        <>
          <Text style={[styles.text, { color: colors.text }]}>
            Username: {user.username}
          </Text>
          <Text style={[styles.text, { color: colors.text }]}>
            Email: {user.email}
          </Text>
        </>
      ) : (
        <Text style={styles.text}>No user data available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 },
});

export default ProfileScreen;
