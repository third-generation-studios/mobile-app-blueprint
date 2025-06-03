import { HapticTab } from "@/components/HapticTab"
import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { Tabs, useSegments } from "expo-router"
import React from "react"
import { Platform, View } from "react-native"
import { Header } from "../../components/Header"

function getTitleFromRoute(routeName: string) {
  switch (routeName) {
    case "index":
      return "Dashboard"
    case "accounts":
      return "Accounts"
    case "transactions":
      return "Transactions"
    case "budgets":
      return "Budgets"
    case "reports":
      return "Reports"
    case "settings":
      return "Settings"
    default:
      return ""
  }
}

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const segments = useSegments()
  // segments example: ["(tabs)", "accounts"]
  const routeName = segments[1] || "index"
  const title = getTitleFromRoute(routeName)

  return (
    <View style={{ flex: 1, backgroundColor: "#181A20" }}>
      <Header title={title} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}>
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        {/* Accounts Tab */}
        <Tabs.Screen
          name="accounts"
          options={{
            title: "Accounts",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="creditcard.fill" color={color} />
            ),
          }}
        />
        {/* Transactions Tab */}
        <Tabs.Screen
          name="transactions"
          options={{
            title: "Transactions",
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name="arrow.left.arrow.right"
                color={color}
              />
            ),
          }}
        />
        {/* Budgets Tab */}
        <Tabs.Screen
          name="budgets"
          options={{
            title: "Budgets",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="chart.pie.fill" color={color} />
            ),
          }}
        />
        {/* Reports Tab */}
        <Tabs.Screen
          name="reports"
          options={{
            title: "Reports",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="doc.plaintext" color={color} />
            ),
          }}
        />
        {/* Settings Tab */}
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="gearshape.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  )
}
