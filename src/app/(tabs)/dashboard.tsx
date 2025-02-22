import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

const DashboardScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Your Dashboard</Text>

        {/* Sample Widgets */}
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={styles.widget}>
            <Text style={styles.widgetText}>Widget {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  widget: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  widgetText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default DashboardScreen;
