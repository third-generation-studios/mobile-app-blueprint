import { useMemo } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import type { Account } from "../../types/account"
import type { Budget } from "../../types/budget"
import type { Transaction } from "../../types/transaction"

// Sample/mock data for demonstration
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
]
const budgets: Budget[] = [
  {
    id: "1",
    name: "Groceries",
    amount: 500,
    period: "monthly",
    spent: 320,
    startDate: "",
    createdAt: "",
  },
  {
    id: "2",
    name: "Entertainment",
    amount: 200,
    period: "monthly",
    spent: 150,
    startDate: "",
    createdAt: "",
  },
]
const transactions: Transaction[] = [
  {
    id: "1",
    amount: 50,
    type: "expense",
    date: "2024-06-01",
    accountId: "1",
    category: "Groceries",
    status: "cleared",
    createdAt: "",
  },
  {
    id: "2",
    amount: 1200,
    type: "income",
    date: "2024-06-01",
    accountId: "1",
    category: "Salary",
    status: "cleared",
    createdAt: "",
  },
  {
    id: "3",
    amount: 30,
    type: "expense",
    date: "2024-06-02",
    accountId: "2",
    category: "Entertainment",
    status: "pending",
    createdAt: "",
  },
]

// Mock user data
const user = { firstName: "Adrian" }

export default function HomeScreen() {
  const totalBalance = useMemo(
    () => accounts.reduce((sum, acc) => sum + acc.balance, 0),
    []
  )

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome back, {user.firstName}! 👋</Text>
      <Text style={styles.subheading}>
        Here’s your financial snapshot for today.
      </Text>
      {/* Accounts Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Accounts</Text>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceValue}>
          ${totalBalance.toLocaleString()}
        </Text>
        <View style={styles.accountList}>
          {accounts.map((acc) => (
            <View key={acc.id} style={styles.accountRow}>
              <Text style={styles.accountName}>{acc.name}</Text>
              <Text style={styles.accountBalance}>
                ${acc.balance.toLocaleString()}{" "}
                <Text style={styles.accountCurrency}>{acc.currency}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* Budgets Summary */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Budgets</Text>
        {budgets.map((budget) => {
          const percent = Math.round((budget.spent / budget.amount) * 100)
          return (
            <View key={budget.id} style={styles.budgetRow}>
              <View style={styles.budgetInfo}>
                <Text style={styles.budgetName}>{budget.name}</Text>
                <Text style={styles.budgetAmount}>
                  ${budget.spent} / ${budget.amount}
                </Text>
              </View>
              <View style={styles.progressBarBg}>
                <View
                  style={[
                    styles.progressBar,
                    {
                      width: `${percent}%`,
                      backgroundColor: percent > 90 ? "#ff5252" : "#4fbe79",
                    },
                  ]}
                />
              </View>
              <Text
                style={[
                  styles.budgetPercent,
                  { color: percent > 90 ? "#ff5252" : "#4fbe79" },
                ]}>
                {percent}%
              </Text>
            </View>
          )
        })}
      </View>
      {/* Recent Transactions */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionRow}>
              <Text
                style={[
                  styles.transactionAmount,
                  item.type === "income" ? styles.income : styles.expense,
                ]}>
                {item.type === "income" ? "+" : "-"}${item.amount}
              </Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.transactionCategory}>
                  {item.category || item.type}
                </Text>
                <Text style={styles.transactionStatus}>{item.status}</Text>
              </View>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          )}
          style={{ maxHeight: 160 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#181A20",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 8,
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
  greeting: {
    fontSize: 20,
    color: "#4fbe79",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 2,
    marginTop: -8,
  },
  subheading: {
    fontSize: 15,
    color: "#b0b3c6",
    textAlign: "center",
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#23263A",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  balanceLabel: {
    color: "#b0b3c6",
    fontSize: 14,
    marginTop: 2,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4fbe79",
    marginBottom: 10,
  },
  accountList: {
    marginTop: 6,
  },
  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  accountName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  accountBalance: {
    color: "#b0b3c6",
    fontSize: 16,
    fontWeight: "600",
  },
  accountCurrency: {
    color: "#6c6f85",
    fontSize: 13,
  },
  budgetRow: {
    marginBottom: 14,
  },
  budgetInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  budgetName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  budgetAmount: {
    color: "#b0b3c6",
    fontSize: 15,
    fontWeight: "600",
  },
  progressBarBg: {
    height: 7,
    backgroundColor: "#35384a",
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 4,
  },
  progressBar: {
    height: 7,
    borderRadius: 5,
  },
  budgetPercent: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 2,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23263A",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: "bold",
    width: 80,
  },
  income: {
    color: "#4fbe79",
  },
  expense: {
    color: "#ff5252",
  },
  transactionCategory: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  transactionStatus: {
    color: "#b0b3c6",
    fontSize: 12,
  },
  transactionDate: {
    color: "#6c6f85",
    fontSize: 13,
    marginLeft: 8,
    fontWeight: "500",
  },
})
