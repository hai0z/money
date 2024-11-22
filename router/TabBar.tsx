import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Tổng  quan",
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={HomeScreen}
          options={{
            title: "Tài khoản",
          }}
        />
        <Tab.Screen name="Add" component={HomeScreen} />
        <Tab.Screen
          name="Report"
          component={HomeScreen}
          options={{
            title: "Báo cáo",
          }}
        />
        <Tab.Screen
          name="Other"
          component={HomeScreen}
          options={{
            title: "Khác",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
