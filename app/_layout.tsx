import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "react-native-reanimated"

import { useColorScheme } from "@/hooks/useColorScheme"
// Import context providers here as your app grows
// import { AccountsProvider } from '@/context/AccountsContext';
// import { BudgetsProvider } from '@/context/BudgetsContext';
// import { TransactionsProvider } from '@/context/TransactionsContext';

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  if (!loaded) {
    // Async font loading only occurs in development.
    return null
  }

  // Wrap with context providers as needed for accounts, budgets, transactions, etc.
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* Example: <AccountsProvider><BudgetsProvider><TransactionsProvider> ... */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      {/* </TransactionsProvider></BudgetsProvider></AccountsProvider> */}
    </ThemeProvider>
  )
}
