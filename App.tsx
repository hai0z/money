import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
const { width: SCREEN_WIDTH } = Dimensions.get("screen");
import { BarChart, PieChart } from "react-native-gifted-charts";
import APP_COLORS from "./constants/color";
const HomeScreen = () => {
  const [showBalance, setShowBalance] = React.useState(true);
  const barData = [
    { value: 1500000, frontColor: APP_COLORS.green },
    { value: 3000000, frontColor: APP_COLORS.red },
  ];
  const pieData = [{ value: 54 }, { value: 40 }, { value: 20 }];
  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <View style={{ width: SCREEN_WIDTH, flex: 1 }}>
      <StatusBar style="auto" />
      <View
        style={{
          paddingTop: 48,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
          backgroundColor: APP_COLORS.primary,
          paddingBottom: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Chào Hoàng Thuỳ Linh!
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons name="autorenew" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="bell" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        bounces={true}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, backgroundColor: APP_COLORS.primary }}>
          <View
            style={{
              height: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              marginHorizontal: 16,
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                paddingHorizontal: 16,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: APP_COLORS.gray,
                    }}
                  >
                    Tổng số dư
                  </Text>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color={APP_COLORS.gray}
                  />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: APP_COLORS.primary,
                  }}
                >
                  {showBalance ? "15.000.000 VND" : "****** VND"}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 16,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={toggleShowBalance}>
                <MaterialCommunityIcons
                  name={showBalance ? "eye" : "eye-off"}
                  size={28}
                  color={APP_COLORS.gray}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 2000 }}>
          <View
            style={{
              marginHorizontal: 16,
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Tình hình thu chi
            </Text>
            <View>
              <Text style={{ color: APP_COLORS.gray }}>Tháng này</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <BarChart
                height={120}
                barWidth={32}
                data={barData}
                xAxisLabelTexts={["Thu", "Chi"]}
                hideYAxisText
                yAxisColor={"transparent"}
                xAxisColor={"transparent"}
              />
            </View>
          </View>
          <View>
            <PieChart
              isAnimated
              donut
              showText
              textColor="black"
              radius={64}
              textSize={12}
              data={pieData}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
