import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";

// Your reusable components
import CurrentLocation from "@/components/CurrentLocation";
import EmergencyContact from "@/components/EmergencyContact";
import PanicSOS from "@/components/PanicSOS";
import RecentActivity from "@/components/RecentActivity";
import SafetyScore from "@/components/SafetyScore";

const TouristPortal = () => {
  return (
    <LinearGradient colors={["#f8fafc", "#e0f2fe"]} style={{ flex: 1 }}>
      <ScrollView
        className="px-4 py-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="w-full max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between flex-wrap gap-4">
              <View>
                <Text className="text-2xl font-bold text-slate-800">
                  Tourist Dashboard
                </Text>
                <Text className="text-slate-500 text-sm">
                  Welcome back, John Doe
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-col gap-6">
            {/* PRIORITY: Emergency Card - Now at the top */}
            <PanicSOS />

            {/* Safety Score - Enhanced */}
            <SafetyScore />

            {/* Current Location - Enhanced */}
            <CurrentLocation />

            {/* Recent Activity - Enhanced */}
            <RecentActivity />

            {/* Emergency Contacts - Enhanced */}
            <EmergencyContact />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default TouristPortal;
