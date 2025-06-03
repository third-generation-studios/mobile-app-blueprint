import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.userIconContainer}>
        {/* Replace with your user avatar/icon component if available */}
        <Text style={styles.userIcon}>🧑‍💼</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 18, // Add horizontal padding
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1.1,
  },
  userIconContainer: {
    backgroundColor: "#23263A",
    borderRadius: 24,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4fbe79",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },
  userIcon: {
    fontSize: 28,
    color: "#4fbe79",
    fontWeight: "bold",
  },
})
