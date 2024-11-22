import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Tổng  quan",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={HomeScreen}
          options={{
            title: "Tài khoản",
            tabBarIcon: ({ color }) => (
              <Entypo name="wallet" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <View
                style={{
                  backgroundColor: "gray",
                  marginTop: 10,
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="plus"
                  size={24}
                  color="white"
                  style={{
                    textAlign: "center",
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Report"
          component={HomeScreen}
          options={{
            title: "Báo cáo",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="chart-simple" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Other"
          component={HomeScreen}
          options={{
            title: "Khác",
            tabBarIcon: ({ color }) => (
              <Ionicons name="grid" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
