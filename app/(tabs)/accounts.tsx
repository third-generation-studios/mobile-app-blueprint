import { FlatList, StyleSheet, Text, View } from "react-native"
import type { Account } from "../../types/account"

const accounts: Account[] = [
  {
    id: "1",
    name: "Checking",
    type: "checking",
    balance: 2500,
    currency: "USD",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    name: "Savings",
    type: "savings",
    balance: 8000,
    currency: "USD",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "3",
    name: "Credit Card",
    type: "credit",
    balance: -350,
    currency: "USD",
    createdAt: "",
    updatedAt: "",
  },
]

const accountTypeIcon = (type: string) => {
  switch (type) {
    case "checking":
      return "🏦"
    case "savings":
      return "💰"
    case "credit":
      return "💳"
    case "investment":
      return "📈"
    case "cash":
      return "💵"
    case "loan":
      return "📄"
    default:
      return "🏦"
  }
}

export default function AccountsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Accounts</Text>
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
              }}>
              <Text style={styles.icon}>{accountTypeIcon(item.type)}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.type}>{item.type.toUpperCase()}</Text>
            <Text
              style={[
                styles.balance,
                { color: item.balance < 0 ? "#ff5252" : "#4fbe79" },
              ]}>
              {item.balance < 0 ? "-" : ""}$
              {Math.abs(item.balance).toLocaleString()} {item.currency}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 18,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#23263A",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 2,
  },
  type: {
    fontSize: 13,
    color: "#b0b3c6",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  balance: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 22,
    marginRight: 8,
  },
})
